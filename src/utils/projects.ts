export type ProjectManifest = {
  title: string
  category: string
  summary: string
  impact: string
  technologies: string[]
  featured?: boolean
  displayImage?: boolean
  display?: boolean
  order?: number
}

export type Project = {
  id: string
  title: string
  category: string
  summary: string
  impact: string
  technologies: string[]
  featured: boolean
  imageUrl?: string
  showImage: boolean
  order: number
}

export type ProjectArticle = Project & {
  content?: string
}

const manifestModules = import.meta.glob('../../projects/**/project.json', {
  eager: true,
  import: 'default',
}) as Record<string, ProjectManifest>

const imageModules = import.meta.glob('../../projects/**/project.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const markdownModules = import.meta.glob('../../projects/**/project.md', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>

const assetModules = import.meta.glob('../../projects/**/assets/*', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const getFolderId = (path: string) => path.split('/').slice(-2, -1)[0]

const processMarkdownImages = (content: string, projectId: string): string => {
  let processedContent = content

  // Replace markdown image syntax: ![alt](./assets/image.png)
  processedContent = processedContent.replace(/!\[(.*?)\]\((\.\/assets\/[^)]+)\)/g, (match, alt, relativePath) => {
    const assetPath = Object.keys(assetModules).find((path) =>
      path.includes(`/${projectId}/`) && path.endsWith(relativePath.replace('./', ''))
    )

    if (assetPath && assetModules[assetPath]) {
      return `![${alt}](${assetModules[assetPath]})`
    }

    return match
  })

  // Replace HTML img tags: <img src="./assets/image.png" ...>
  processedContent = processedContent.replace(/(<img[^>]*src=["'])(\.\/assets\/[^"']+)(["'][^>]*>)/g, (match, before, relativePath, after) => {
    const assetPath = Object.keys(assetModules).find((path) =>
      path.includes(`/${projectId}/`) && path.endsWith(relativePath.replace('./', ''))
    )

    if (assetPath && assetModules[assetPath]) {
      return `${before}${assetModules[assetPath]}${after}`
    }

    return match
  })

  return processedContent
}

const sortProjects = (projects: Project[]): Project[] =>
  projects.sort((a, b) => {
    // Sort by order first (lower numbers first), then by ID
    if (a.order !== b.order) {
      return a.order - b.order
    }
    return a.id.localeCompare(b.id)
  })

export const loadProjects = (): Project[] => {
  const projects = Object.entries(manifestModules)
    .filter(([, manifest]) => manifest.display === true)
    .map(([path, manifest]) => {
      const id = getFolderId(path)
      const imagePath = path.replace('project.json', 'project.png')
        .replace('project.json', 'project.jpg')
        .replace('project.json', 'project.jpeg')
        .replace('project.json', 'project.webp')

      return {
        id,
        title: manifest.title,
        category: manifest.category,
        summary: manifest.summary,
        impact: manifest.impact,
        technologies: manifest.technologies,
        featured: manifest.featured ?? false,
        imageUrl: imageModules[imagePath] ?? imageModules[path.replace('project.json', 'project.png')],
        showImage: Boolean(manifest.displayImage && imageModules[imagePath]),
        order: manifest.order ?? 999,
      }
    })

  return sortProjects(projects)
}

export const loadProjectById = async (id: string): Promise<ProjectArticle | null> => {
  const projects = loadProjects()
  const project = projects.find((p) => p.id === id)

  if (!project) return null

  // Try to load markdown content
  const markdownPath = Object.keys(markdownModules).find((path) => getFolderId(path) === id)
  let content = markdownPath ? await markdownModules[markdownPath]() : undefined

  // Process markdown to replace relative image paths with imported asset URLs
  if (content) {
    content = processMarkdownImages(content, id)
  }

  return {
    ...project,
    content,
  }
}
