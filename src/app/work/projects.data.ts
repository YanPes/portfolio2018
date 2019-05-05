export interface Project {
    thumbnail: string;
    colorIndicator: string;
    name: string;
    description: string;
    tag: string;
    type: ProjectType;
    routerLink: string;
}

export enum ProjectType {
    Art = 0,
    IG = 1,
    All = 2
}

export const data = [
    {
        thumbnail: 'assets/images/pacian/pacian-thumbnail.jpg',
        colorIndicator: 'color-indicator-IG',
        name: 'Pacian',
        description: 'The Parametric City Analysis Toolbox for Urban Development',
        tag: '#Research #Concept #UX #UI #Prototying #Principle',
        type: ProjectType.IG,
        routerLink: "/pacian"
    },
    {
        thumbnail: 'assets/images/dear-google/deargoogle-thumbnail.jpg',
        colorIndicator: 'color-indicator-IG',
        name: 'Dear Google',
        description: 'A Love Letter for Pedestrian Navigation',
        tag: '#Research #Concept #UX #UI #Prototying #Framer.js #Mapbox.js',
        type: ProjectType.IG,
        routerLink: "/dear-google"
    },
    {
        thumbnail: 'assets/images/botui/botui-thumbnail.png',
        colorIndicator: 'color-indicator-IG',
        name: 'Botui',
        description: 'Tangible User Interface for quantitative Literature Analysis',
        tag: '#Research #Concept #UX #UI #Prototying #VVVV',
        type: ProjectType.IG,
        routerLink: "/botui"
    },
    {
        thumbnail: 'assets/images/deep-space-images/deep-space-images-thumbnail.jpg',
        colorIndicator: 'color-indicator-IG',
        name: 'Deep Space Images',
        description: 'Point Cloud Data Visualization using the Image itself as Database',
        tag: '#Research #Concept #Prototying #Unity3D #C#',
        type: ProjectType.IG,
        routerLink: "/deep-space-images"
    },
    {
        thumbnail: 'assets/images/the-journey-of-ray/the-journey-of-ray-thumbnail.jpg',
        colorIndicator: 'color-indicator-IG',
        name: 'The Journey of Ray',
        description: 'Two Dimensional Platformer focused on Usability and Storytelling',
        tag: '#Research #Concept #UX #Painting #Prototying #Unity3D #C#',
        type: ProjectType.IG,
        routerLink: "/theJourneyOfRay"
    },
    {
        thumbnail: 'assets/images/geostories/geostories-thumbnail.jpg',
        colorIndicator: 'color-indicator-IG',
        name: 'Geo Stories',
        description: 'Locative Game for creating and playing interactive Geocaches',
        tag: '#Research #Concept #UX #UI #Prototying #Flinto #Mapbox.js',
        type: ProjectType.IG,
        routerLink: "/geoStories"
    },
    {
        thumbnail: 'assets/images/electrify-aesthetics/electrify-aesthetics-thumbnail.jpg',
        colorIndicator: 'color-indicator-ART',
        name: 'Electrify Aesthetics',
        description: 'Lighting and Material Study to keep my creative Juices flowing',
        tag: '#Shading #Lighting #Rendering #Modo #V-Ray #SubstanceDesigner',
        type: ProjectType.Art,
        routerLink: "/electrify-aesthetics"
    },
    {
        thumbnail: 'assets/images/sandstone-pbr-material/sandstone-pbr-material-thumbnail.jpg',
        colorIndicator: 'color-indicator-ART',
        name: 'Sandstone PBR Material',
        description: 'Fully procedural PBR Material created with Substance Designer',
        tag: '#Authoring #Rendering #SubstanceDesigner #Toolbag',
        type: ProjectType.Art,
        routerLink: "/sandstonePbrMaterial"
    },
    {
        thumbnail: 'assets/images/old-soviet-metro-tunnel/old-soviet-metro-tunnel-thumbnail.jpg',
        colorIndicator: 'color-indicator-ART',
        name: 'Old Soviet Metro Tunnel',
        description: '3D Realtime Environment created in Unreal Engine 4',
        tag: '#Concept #Modeling #Lighting #Rendering #Compositing',
        type: ProjectType.Art,
        routerLink: "/oldSovietMetroTunnel"
    }
]
