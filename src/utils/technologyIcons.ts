/**
 * Technology icon and color mappings
 * Icons from local public folder and CDN fallbacks
 * Local icons: /public/*.svg
 * SVGRepo: https://www.svgrepo.com/collection/colored-interface-and-logo-icons/
 */

export interface TechnologyInfo {
  icon: string;
  color: string;
  name: string;
}

// Helper function to get local icon from public folder
const localIcon = (filename: string): string => `/${filename}`;

// Helper function to get Simple Icons CDN URL (monochrome, will be colored by background) - fallback
const simpleIcon = (name: string): string => 
  `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${name.toLowerCase().replace(/\s+/g, '')}.svg`;

const technologyMap: Record<string, TechnologyInfo> = {
  // Languages
  'Go': {
    icon: localIcon('go-svgrepo-com.svg'),
    color: '#00ADD8',
    name: 'Go'
  },
  'Node.js': {
    icon: localIcon('node-js-svgrepo-com.svg'),
    color: '#339933',
    name: 'Node.js'
  },
  'TypeScript': {
    icon: simpleIcon('typescript'),
    color: '#3178C6',
    name: 'TypeScript'
  },
  'JavaScript': {
    icon: localIcon('js-svgrepo-com.svg'),
    color: '#F7DF1E',
    name: 'JavaScript'
  },
  'Java': {
    icon: localIcon('java-svgrepo-com.svg'),
    color: '#ED8B00',
    name: 'Java'
  },
  'Python': {
    icon: localIcon('python-svgrepo-com.svg'),
    color: '#3776AB',
    name: 'Python'
  },
  
  // Frontend
  'React': {
    icon: localIcon('react-svgrepo-com.svg'),
    color: '#61DAFB',
    name: 'React'
  },
  
  // Backend/Frameworks
  'Spring': {
    icon: simpleIcon('spring'),
    color: '#6DB33F',
    name: 'Spring'
  },
  
  // Databases
  'PostgreSQL': {
    icon: simpleIcon('postgresql'),
    color: '#336791',
    name: 'PostgreSQL'
  },
  'Redis': {
    icon: simpleIcon('redis'),
    color: '#DC382D',
    name: 'Redis'
  },
  
  // Infrastructure
  'Docker': {
    icon: localIcon('docker-svgrepo-com.svg'),
    color: '#2496ED',
    name: 'Docker'
  },
  'Kubernetes': {
    icon: simpleIcon('kubernetes'),
    color: '#326CE5',
    name: 'Kubernetes'
  },
  'Linux': {
    icon: localIcon('linux-svgrepo-com.svg'),
    color: '#FCC624',
    name: 'Linux'
  },
  'Jenkins': {
    icon: simpleIcon('jenkins'),
    color: '#D24939',
    name: 'Jenkins'
  },
  'ArgoCD': {
    icon: simpleIcon('argo'),
    color: '#EF7B4D',
    name: 'ArgoCD'
  },
  
  // Blockchain
  'Bitcoin': {
    icon: localIcon('bitcoin-svgrepo-com.svg'),
    color: '#F7931A',
    name: 'Bitcoin'
  },
  'Polkadot': {
    icon: simpleIcon('polkadot'),
    color: '#E6007A',
    name: 'Polkadot'
  },
  'Cosmos SDK': {
    icon: simpleIcon('cosmos'),
    color: '#2E3148',
    name: 'Cosmos SDK'
  },
  'Cosmos': {
    icon: simpleIcon('cosmos'),
    color: '#2E3148',
    name: 'Cosmos'
  },
  'Zcash': {
    icon: simpleIcon('zcash'),
    color: '#F4B728',
    name: 'Zcash'
  },
  'Rosetta': {
    icon: simpleIcon('rosetta'),
    color: '#5A67D8',
    name: 'Rosetta'
  },
  
  // Security/Hardware
  'HSM': {
    icon: simpleIcon('yubico'),
    color: '#4A5568',
    name: 'HSM'
  },
  'PKCS#11': {
    icon: simpleIcon('yubico'),
    color: '#4A5568',
    name: 'PKCS#11'
  },
  
  // AI/ML
  'LLMs': {
    icon: simpleIcon('openai'),
    color: '#9333EA',
    name: 'LLMs'
  },
  
  // Tools
  'Postman': {
    icon: simpleIcon('postman'),
    color: '#FF6C37',
    name: 'Postman'
  },
  'cURL': {
    icon: simpleIcon('curl'),
    color: '#073551',
    name: 'cURL'
  },
  'Tableau': {
    icon: simpleIcon('tableau'),
    color: '#E97627',
    name: 'Tableau'
  },
  'Earthly': {
    icon: simpleIcon('earthly'),
    color: '#6B46C1',
    name: 'Earthly'
  },
  
  // APIs/Services
  'WhatsApp API': {
    icon: localIcon('whatsapp-svgrepo-com.svg'),
    color: '#25D366',
    name: 'WhatsApp API'
  },
  'MCP': {
    icon: simpleIcon('mcp'),
    color: '#6366F1',
    name: 'MCP'
  },
  
  // Other
  'Microservices': {
    icon: simpleIcon('docker'),
    color: '#10B981',
    name: 'Microservices'
  },
  'Payment Processing': {
    icon: simpleIcon('stripe'),
    color: '#059669',
    name: 'Payment Processing'
  },
  'Chaos Engineering': {
    icon: simpleIcon('chaosmonkey'),
    color: '#DC2626',
    name: 'Chaos Engineering'
  }
};

/**
 * Get technology information (icon and color) for a given technology name
 * @param technologyName - The name of the technology
 * @returns TechnologyInfo object with icon, color, and name, or a default if not found
 */
export const getTechnologyInfo = (technologyName: string): TechnologyInfo => {
  // Try exact match first
  if (technologyMap[technologyName]) {
    return technologyMap[technologyName];
  }
  
  // Try case-insensitive match
  const lowerName = technologyName.toLowerCase();
  const found = Object.entries(technologyMap).find(([key]) => 
    key.toLowerCase() === lowerName
  );
  
  if (found) {
    return found[1];
  }
  
  // Return default for unknown technologies with a data URI fallback
  const defaultIcon = `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M9 9h6v6H9z"/></svg>`
  )}`;
  
  return {
    icon: defaultIcon,
    color: '#6B7280',
    name: technologyName
  };
};

