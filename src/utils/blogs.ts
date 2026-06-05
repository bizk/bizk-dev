export type BlogManifest = {
  title: string
  description: string
  labels?: string[]
  timeToRead?: number
  displayImage?: boolean
  date: string
}

export type BlogPost = {
  id: string
  title: string
  summary: string
  category: string
  rawDate: string
  date: string
  readTime: string
  tags: string[]
  content: string
  imageUrl?: string
  showImage: boolean
}

export type BlogSummary = Omit<BlogPost, 'content'>

const manifestModules = import.meta.glob('../../blogs/**/blog.json', {
  eager: true,
  import: 'default',
}) as Record<string, BlogManifest>

const markdownModules = import.meta.glob('../../blogs/**/blog.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

const imageModules = import.meta.glob('../../blogs/**/blog.png', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const assetImageModules = import.meta.glob('../../blogs/**/assets/*.{png,jpg,jpeg,gif,svg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const getFolderId = (path: string) => path.split('/').slice(-2, -1)[0]

const formatDate = (value: string): string => {
  const parsed = new Date(value)

  if (Number.isNaN(parsed.getTime())) {
    return value
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(parsed)
}

const estimateReadTime = (markdown: string): string => {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / 180))
  return `${minutes} min read`
}

const toCategory = (labels: string[]): string => {
  const meaningfulLabel = labels.find((label) => label.toLowerCase() !== 'blog')
  return meaningfulLabel ?? 'General'
}

const toBasePost = (path: string, manifest: BlogManifest) => {
  const id = getFolderId(path)
  const imagePath = path.replace('blog.json', 'blog.png')
  const tags = manifest.labels ?? []

  return {
    id,
    title: manifest.title,
    summary: manifest.description,
    category: toCategory(tags),
    rawDate: manifest.date,
    date: formatDate(manifest.date),
    tags,
    imageUrl: imageModules[imagePath],
    showImage: Boolean(manifest.displayImage && imageModules[imagePath]),
  }
}

const sortPosts = <T extends { rawDate: string }>(posts: T[]): T[] =>
  posts.sort((a, b) => new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime())

const replaceAssetPaths = (markdown: string, postId: string): string => {
  let processedMarkdown = markdown

  // Find all asset images for this post
  Object.entries(assetImageModules).forEach(([path, url]) => {
    // Extract the blog folder from the path (e.g., "blog_1_gasless_swaps")
    const pathParts = path.split('/')
    const blogFolderIndex = pathParts.findIndex((part) => part === 'blogs')
    if (blogFolderIndex === -1) return

    // Get the folder structure after 'blogs/' to match against postId
    // For technical blogs: blogs/technical/blog_1_gasless_swaps
    // For regular blogs: blogs/blog_1
    const afterBlogs = pathParts.slice(blogFolderIndex + 1)
    const containsPostId = afterBlogs.some((part) => part === postId)

    if (!containsPostId) return

    // Get the filename from the path
    const filename = pathParts[pathParts.length - 1]

    // Replace both HTML img tags and markdown image syntax
    const relativePath = `./assets/${filename}`
    processedMarkdown = processedMarkdown.replace(
      new RegExp(relativePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
      url as string
    )
  })

  return processedMarkdown
}

export const loadBlogPosts = (): BlogPost[] => {
  const posts = Object.entries(manifestModules).map(([path, manifest]) => {
    const markdownPath = path.replace('blog.json', 'blog.md')
    const markdown = markdownModules[markdownPath] ?? ''
    const postId = getFolderId(path)

    return {
      ...toBasePost(path, manifest),
      readTime: manifest.timeToRead ? `${manifest.timeToRead} min read` : estimateReadTime(markdown),
      content: replaceAssetPaths(markdown, postId),
    }
  })

  return sortPosts(posts)
}

export const loadBlogSummaries = (): BlogSummary[] =>
  sortPosts(
    Object.entries(manifestModules).map(([path, manifest]) => ({
      ...toBasePost(path, manifest),
      readTime: manifest.timeToRead ? `${manifest.timeToRead} min read` : '1 min read',
    })),
  )

export const loadBlogPostById = (id: string): BlogPost | null =>
  loadBlogPosts().find((post) => post.id === id) ?? null
