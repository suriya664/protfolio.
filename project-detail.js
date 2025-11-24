// Project data
const projects = {
    1: {
        title: "E-Commerce Platform",
        category: "Web Development",
        image: "assets/project-1.jpg",
        description: "A fully responsive e-commerce platform built with modern web technologies. This project features a complete shopping experience with product catalog, shopping cart, checkout process, and user authentication.",
        technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB"],
        features: [
            "Responsive design for all devices",
            "User authentication and authorization",
            "Shopping cart functionality",
            "Payment gateway integration",
            "Product search and filtering",
            "Order management system"
        ],
        client: "Tech Solutions Inc.",
        year: "2024",
        link: "#"
    },
    2: {
        title: "Mobile App Design",
        category: "UI/UX Design",
        image: "assets/project-2.jpg",
        description: "A modern and intuitive mobile app design for a fitness tracking application. The design focuses on user experience, accessibility, and visual appeal to encourage user engagement.",
        technologies: ["Figma", "Adobe XD", "Sketch", "Principle"],
        features: [
            "User-centered design approach",
            "Intuitive navigation system",
            "Accessible color schemes",
            "Interactive prototypes",
            "Design system implementation",
            "User testing and iteration"
        ],
        client: "Fitness Pro App",
        year: "2024",
        link: "#"
    },
    3: {
        title: "Dashboard Interface",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800&auto=format&fit=crop",
        description: "A comprehensive admin dashboard with real-time analytics, data visualization, and management tools. Built with modern frameworks for optimal performance and user experience.",
        technologies: ["React", "TypeScript", "Chart.js", "Material-UI", "REST API"],
        features: [
            "Real-time data visualization",
            "Interactive charts and graphs",
            "User management system",
            "Role-based access control",
            "Export functionality",
            "Responsive design"
        ],
        client: "Data Analytics Corp",
        year: "2024",
        link: "#"
    },
    4: {
        title: "Brand Identity",
        category: "UI/UX Design",
        image: "assets/project-4.jpg",
        description: "Complete brand identity design including logo, color palette, typography, and brand guidelines. Created a cohesive visual identity that reflects the company's values and mission.",
        technologies: ["Adobe Illustrator", "Adobe Photoshop", "InDesign"],
        features: [
            "Logo design and variations",
            "Color palette development",
            "Typography selection",
            "Brand guidelines document",
            "Marketing materials design",
            "Social media assets"
        ],
        client: "Startup Ventures",
        year: "2023",
        link: "#"
    },
    5: {
        title: "Portfolio Website",
        category: "Web Development",
        image: "https://images2.alphacoders.com/101/thumb-1920-1012977.jpg",
        description: "A modern, responsive portfolio website showcasing creative work and professional achievements. Features smooth animations, optimized performance, and SEO best practices.",
        technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Webpack"],
        features: [
            "Fully responsive design",
            "Smooth scroll animations",
            "Image optimization",
            "SEO optimized",
            "Fast loading times",
            "Cross-browser compatibility"
        ],
        client: "Creative Agency",
        year: "2024",
        link: "#"
    },
    6: {
        title: "Landing Page",
        category: "UI/UX Design",
        image: "https://img.freepik.com/premium-vector/gradient-uiux-landing-page-template_1323905-22.jpg?semt=ais_hybrid",
        description: "A high-converting landing page designed to capture leads and drive conversions. The design focuses on clear messaging, compelling visuals, and strategic call-to-action placement.",
        technologies: ["Figma", "Adobe XD", "HTML/CSS", "JavaScript"],
        features: [
            "Conversion-focused design",
            "A/B testing ready",
            "Mobile-first approach",
            "Fast loading optimization",
            "Lead capture forms",
            "Social proof elements"
        ],
        client: "Marketing Agency",
        year: "2024",
        link: "#"
    }
};

// Get project ID from URL
function getProjectId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('project') || '1';
}

// Load project details
function loadProjectDetails() {
    const projectId = getProjectId();
    const project = projects[projectId];
    
    if (!project) {
        document.getElementById('projectContent').innerHTML = `
            <div class="error-message">
                <h2>Project Not Found</h2>
                <p>The project you're looking for doesn't exist.</p>
                <a href="projects.html" class="btn btn-primary">Back to Projects</a>
            </div>
        `;
        return;
    }
    
    const projectHTML = `
        <div class="project-detail-content">
            <div class="project-detail-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-detail-info">
                <div class="project-meta">
                    <span class="project-category-badge">${project.category}</span>
                    <span class="project-year">${project.year}</span>
                </div>
                <h1>${project.title}</h1>
                <p class="project-description">${project.description}</p>
                
                <div class="project-details-grid">
                    <div class="detail-item">
                        <h3>Client</h3>
                        <p>${project.client}</p>
                    </div>
                    <div class="detail-item">
                        <h3>Year</h3>
                        <p>${project.year}</p>
                    </div>
                    <div class="detail-item">
                        <h3>Category</h3>
                        <p>${project.category}</p>
                    </div>
                </div>
                
                <div class="project-technologies">
                    <h3>Technologies Used</h3>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="project-features">
                    <h3>Key Features</h3>
                    <ul class="features-list">
                        ${project.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="project-actions">
                    <a href="${project.link}" class="btn btn-primary" target="_blank">
                        <i class="fas fa-external-link-alt"></i> View Live Project
                    </a>
                    <a href="projects.html" class="btn btn-secondary">
                        <i class="fas fa-arrow-left"></i> Back to Projects
                    </a>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('projectContent').innerHTML = projectHTML;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadProjectDetails);


