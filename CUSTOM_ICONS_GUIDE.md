# Hướng dẫn sử dụng Custom Icons

## Đã thay đổi:

### 1. Màu Header của 4 categories
- **Frontend**: Màu xanh dương (blue) phù hợp với nền
- **Backend**: Màu xanh lá (emerald) phù hợp với nền  
- **Cloud & DevOps**: Màu cam (orange) phù hợp với nền
- **Specialized**: Màu tím (purple) phù hợp với nền

### 2. Hỗ trợ Custom Icons

Bạn có thể thay thế icon lucide bằng:
- **Icon chính thức** (URL hoặc local path)
- **Emoji** (🔥, ⚛️, 🎨, etc.)

## Cách sử dụng:

### Ví dụ 1: Sử dụng Emoji
```typescript
// Trong portfolio/src/data/projects.ts
export const skills = {
  frontend: [
    { name: 'React/Next.js', level: 'Expert', customIcon: '⚛️' },
    { name: 'TypeScript', level: 'Expert', customIcon: '📘' },
    // ...
  ],
  specialized: [
    { name: 'AI Integration (Gemini/Vertex AI)', level: 'Advanced', customIcon: '🤖' },
    // ...
  ]
}
```

### Ví dụ 2: Sử dụng Icon URL (Simple Icons, DevIcons, etc.)
```typescript
export const skills = {
  frontend: [
    { 
      name: 'React/Next.js', 
      level: 'Expert', 
      customIcon: 'https://cdn.simpleicons.org/react/61DAFB' 
    },
    { 
      name: 'TypeScript', 
      level: 'Expert', 
      customIcon: 'https://cdn.simpleicons.org/typescript/3178C6' 
    },
  ],
  backend: [
    { 
      name: 'Node.js/Express', 
      level: 'Expert', 
      customIcon: 'https://cdn.simpleicons.org/nodedotjs/339933' 
    },
    { 
      name: 'Firebase/Firestore', 
      level: 'Expert', 
      customIcon: 'https://cdn.simpleicons.org/firebase/FFCA28' 
    },
  ]
}
```

### Ví dụ 3: Sử dụng Local Icons
```typescript
// Đặt icon vào portfolio/public/tech-icons/
export const skills = {
  specialized: [
    { 
      name: 'AI Integration (Gemini/Vertex AI)', 
      level: 'Advanced', 
      customIcon: '/tech-icons/gemini.svg' 
    },
  ]
}
```

## Resources cho Icons:

1. **Simple Icons** (3000+ brand icons): https://simpleicons.org/
   - CDN: `https://cdn.simpleicons.org/[BRAND]/[COLOR]`
   - Ví dụ: `https://cdn.simpleicons.org/react/61DAFB`

2. **DevIcons**: https://devicon.dev/
   - CDN: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/[name]/[name]-original.svg`

3. **Emoji**: Sử dụng trực tiếp emoji Unicode

## Lưu ý:
- Nếu không có `customIcon`, hệ thống sẽ fallback về `icon` (lucide icon)
- Icon size tự động responsive: 14px (mobile) → 16px (desktop)
