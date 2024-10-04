type ResourceURL = string;

export enum BuildingCategory {
    Extraction = "extraction",
    Production = "production",
    Generator = "generator",
    Special = "special",
    Workstation = "workstation",
    Storage = "storage",
    DockingStation = "dockstation",
    Tower = "tower",
}

export interface BuildingData {
    iconId: number;
    name: string;
    category: BuildingCategory;
    powerUsed: number;
    extractionRate: { impure: number; normal: number; pure: number; };
    image: string;
    description: string;
    width: number;
    length: number;
    height: number;
    input: number;
    output: number;
}

// "ore": "Ores",
// "ingot": "Ingots",
// "mineral": "Minerals",
// "animal": "Aliens",
// "liquid": "Liquids",
// "gas": "Gas",
// "standard": "Standard Parts",
// "industrial": "Industrial Parts",
// "electronic": "Electronics",
// "communication": "Communications",
// "quantum": "Quantum Technology",
// "container": "Containers",
// "fuel": "Fuels",
// "consumed": "Consumed",
// "ammo": "Ammos",
// "nuclear": "Nuclear",
// "waste": "Waste",
// "special": "Special"
export enum ItemCategory {
    Ore = "ore",
    Ingot = "ingot",
}

export interface ItemData {
    iconId: number;
    name: string;
    category: ItemCategory;
    resourceSinkPoints: number;
    description: string;
    image: string;
    stack: number;
    url: ResourceURL;
}

export interface RecipeData {
    name: string;
    ingredients: Record<ResourceURL, number>[];
    produce: Record<ResourceURL, number>[];
    mManufactoringDuration: number;
    mManualManufacturingMultiplier: number;
    mProducedIn: ResourceURL[];
}

export interface CalcData {
    buildingsData: Record<string, BuildingData>;
    itemsData: Record<string, ItemData>;
    recipesData: Record<string, RecipeData>;
}

export interface Building {
    name: string,
    icon: string,
}