import {
  CheckCircle,
  Sparkles,
  Star,
  Shield,
  Droplets,
  Building2,
  Hotel,
  Utensils,
  Truck,
  Hospital,
  SprayCan,
  Hand,
  Paintbrush,
  Fish,
  ShoppingCart,
  Factory,
  UtensilsCrossed,
  Package,
  Toilet,
  Tractor,
  Trash,
  PackageMinus,
  Droplet,
  Flame,
  GlassWater,
  Beer,
  WashingMachine,
  Brush,
  Barrel,
  BrickWall,
  Wrench,
  ShowerHead,
  Building,
  Leaf,
  Filter,
  Bubbles,
  Sprout,
  Sofa,
  Citrus,
  SquareDashed,
  Layers,
  Cog,
  AlertTriangle,
  Bath,
  Wind,
} from "lucide-react";

export const chemicals = {
  "Automotive Chemicals": [
    {
      id: "550e8400-e29b-41d4-a716-446655440001",
      code: "AC1",
      name: "TRAFFIC FILM REMOVER",
      description:
        "A highly concentrated alkaline pressure washer additive, designed with controlled foam levels to ensure a free-rinsing finish and effective degreasing action. Excellent for removing heavy layers of traffic film, grease and dirt and is ideally suited for removing built-up grease in the engine compartment.",
      highlights: [
        "Concentrated alkaline washer additive",
        "Ensures free-rinsing degreasing action",
        "Removes traffic film effectively",
      ],
      features: [
        "Highly concentrated alkaline formula",
        "Controlled foam for easy rinsing",
        "Effective degreasing action",
        "Removes heavy traffic film and dirt",
        "Ideal for engine compartment cleaning",
        "Pressure washer compatible",
      ],
      applications: [
        { icon: Sparkles, text: "Vehicle Exterior Cleaning" },
        { icon: Shield, text: "Heavy Duty Transport" },
        { icon: CheckCircle, text: "Engine Maintenance" },
      ],
      surfaces: ["Vehicle Exteriors", "Engine Compartments", "Metal Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440002",
      code: "AC2",
      name: "TRAFFIC FILM REMOVER + WAX",
      description:
        "A highly concentrated alkaline pressure washer additive, designed with controlled foam levels to ensure a free-rinsing finish and effective degreasing action. Traffic Film Remover + Wax has the added benefits of a water dispersant to produce a wax like finish.",
      highlights: [
        "Concentrated alkaline washer additive",
        "Provides free-rinsing degreasing action",
        "Adds wax-like water finish",
      ],
      features: [
        "Highly concentrated alkaline formula",
        "Controlled foam for easy rinsing",
        "Effective degreasing action",
        "Provides wax-like protective finish",
        "Repels water for enhanced shine",
        "Pressure washer compatible",
      ],
      applications: [
        { icon: Sparkles, text: "Vehicle Exterior Cleaning" },
        { icon: Shield, text: "Heavy Duty Transport" },
        { icon: Star, text: "Protective Coating Application" },
      ],
      surfaces: ["Vehicle Exteriors", "Painted Surfaces", "Metal Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440003",
      code: "AC3",
      name: "BODY AND CURTAIN WASH",
      description:
        "A concentrated alkaline detergent suitable for cleaning cars, vans, lorries, tankers, curtain-sided vehicles and commercial vehicles to remove traffic film, grease and dirt. Developed for cleaning vehicles throughout the automotive and transport industry for use on curtain sided vehicles, for the removal of traffic film and heavy soiling from curtains and tilts etc.",
      highlights: [
        "Concentrated alkaline vehicle cleaner",
        "Removes traffic film and dirt",
        "Cleans curtains and tilts",
      ],
      features: [
        "Concentrated alkaline detergent",
        "Removes traffic film and grease",
        "Effective on heavy soiling",
        "Suitable for curtain-sided vehicles",
        "Designed for automotive industry",
        "Cleans a variety of vehicles",
      ],
      applications: [
        { icon: Sparkles, text: "Cars and Vans" },
        { icon: Shield, text: "Lorries and Tankers" },
        { icon: Building2, text: "Commercial Transport" },
      ],
      surfaces: [
        "Vehicle Bodies",
        "Curtain-Sided Materials",
        "Painted Surfaces",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440004",
      code: "AC4",
      name: "CHASSIS WASH",
      description:
        "A powerful, concentrated, alkaline pressure washer additive suitable for removing heavy layers of traffic film, grease and dirt and is ideally suited for removing built-up grease in the engine compartment. Chassis Wash is suitable for cleaning all heavy plant machinery and equipment, lorries, tankers, and as an effective pre-MOT test cleaner on chassis and under body areas",
      highlights: [
        "Powerful alkaline washer additive",
        "Removes heavy traffic film",
        "Cleans chassis and machinery",
      ],
      features: [
        "Powerful concentrated alkaline formula",
        "Removes heavy traffic film and grease",
        "Ideal for chassis and underbody",
        "Suitable for heavy plant machinery",
        "Effective pre-MOT cleaner",
        "Pressure washer compatible",
      ],
      applications: [
        { icon: Shield, text: "Heavy Duty Vehicles" },
        { icon: CheckCircle, text: "Machinery Maintenance" },
        { icon: Star, text: "Pre-MOT Cleaning" },
      ],
      surfaces: ["Chassis", "Engine Compartments", "Heavy Machinery"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440005",
      code: "AC5",
      name: "SNOW FOAM (pH NEUTRAL)",
      description:
        "Specially formulated for application via pressure washer foam lances, this neutral pH Snow Foam produces a blanket of rich lather to cover your vehicle. The movement of the bubbles in the foam gently lifts dirt away without scratching the surface unlike traditional sponges or wash mitts.",
      highlights: [
        "Neutral pH foam lather",
        "Gently lifts dirt away",
        "Prevents surface scratching",
      ],
      features: [
        "Neutral pH formulation",
        "Produces rich foam lather",
        "Gentle dirt removal",
        "Prevents surface scratches",
        "Pressure washer foam lance compatible",
        "Safe for vehicle surfaces",
      ],
      applications: [
        { icon: Sparkles, text: "Vehicle Exterior Cleaning" },
        { icon: Droplets, text: "Foam Lance Application" },
        { icon: Shield, text: "Surface Protection" },
      ],
      surfaces: ["Vehicle Paintwork", "Glass", "Metal Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440006",
      code: "AC6",
      name: "SNOW FOAM (ALKALINE)",
      description:
        "Specially formulated for application via pressure washer foam lances, this heavy duty alkaline Snow Foam produces a blanket of rich lather to cover your vehicle. The movement of the bubbles in the foam gently lifts dirt away without scratching the surface unlike traditional sponges or wash mitts. For use on heavily soiled vehicles, plant, curtain sided vehicles, tilts, etc.",
      highlights: [
        "Alkaline heavy duty foam",
        "Lifts dirt without scratches",
        "Suitable for soiled vehicles",
      ],
      features: [
        "Heavy duty alkaline formulation",
        "Produces rich foam lather",
        "Gentle dirt removal",
        "Prevents surface scratches",
        "Ideal for heavily soiled vehicles",
        "Pressure washer foam lance compatible",
      ],
      applications: [
        { icon: Shield, text: "Heavy Duty Vehicles" },
        { icon: Droplets, text: "Foam Lance Application" },
        { icon: Building2, text: "Curtain-Sided Transport" },
      ],
      surfaces: [
        "Vehicle Paintwork",
        "Curtain-Sided Materials",
        "Heavy Machinery",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440007",
      code: "AC7",
      name: "WASH AND WAX",
      description:
        "Wash & Wax is a viscous liquid shampoo for hand use to clean and shine all vehicles. Wash and Wax is highly concentrated and contains advanced surfactants which leaves a shiny finish that is free from streaks and spotting. Ideal for the regular cleaning of vehicle paintwork, bodywork, plastic, rubber, perspex and aluminium.",
      highlights: [
        "Viscous shampoo for shine",
        "Leaves streak-free shiny finish",
        "Cleans paintwork and plastic",
      ],
      features: [
        "Highly concentrated viscous shampoo",
        "Contains advanced surfactants",
        "Provides streak-free shine",
        "Prevents spotting",
        "Suitable for manual application",
        "Cleans multiple vehicle surfaces",
      ],
      applications: [
        { icon: Sparkles, text: "Vehicle Cleaning" },
        { icon: CheckCircle, text: "Manual Washing" },
        { icon: Star, text: "Protective Shine" },
      ],
      surfaces: [
        "Vehicle Paintwork",
        "Plastic",
        "Rubber",
        "Perspex",
        "Aluminium",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440008",
      code: "AC8",
      name: "ENGINE AND CHASSIS DEGREASING SOLVENT",
      description:
        "Engine And Chassis Degreasing Solvent has been specifically developed to clean oils, grease and grime from very dirty surfaces, factories, garages, engineering shops etc. Formulated to be emulsifiable with water, Degreasing Solvent is also a good product for cleaning oil spillages as well as dirt, oil and grease from engines, Desert floors, walls etc.",
      highlights: [
        "Cleans oils and grease",
        "Emulsifiable with water",
        "Removes oil spillages",
      ],
      features: [
        "Powerful degreasing solvent",
        "Emulsifiable with water for rinsing",
        "Removes oils, grease, and grime",
        "Effective on oil spillages",
        "Suitable for industrial environments",
        "Cleans engines and chassis",
      ],
      applications: [
        { icon: CheckCircle, text: "Engine and Chassis Cleaning" },
        { icon: Building2, text: "Industrial Facilities" },
        { icon: Droplets, text: "Oil Spill Cleanup" },
      ],
      surfaces: ["Engines", "Chassis", "Concrete Floors", "Walls"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440009",
      code: "AC9",
      name: "ALUMINIUM CLEANER",
      description:
        "Aluminium Cleaner is a powerful acidic product formulated for the removal of oxide film and ingrained dirt. This is a powerful blend of acids and will remove the heaviest deposits of corrosion, dirt and grime from aluminium. Aluminium Cleaner quickly cleans and restores aluminium bodied vehicles.",
      highlights: [
        "Powerful acidic aluminium cleaner",
        "Removes corrosion and dirt",
        "Restores aluminium vehicles",
      ],
      features: [
        "Powerful acidic formulation",
        "Removes oxide film and corrosion",
        "Targets ingrained dirt and grime",
        "Restores aluminium surfaces",
        "Fast-acting cleaning",
        "Suitable for vehicle bodies",
      ],
      applications: [
        { icon: Sparkles, text: "Aluminium Vehicle Cleaning" },
        { icon: Shield, text: "Transport Industry" },
        { icon: Star, text: "Metal Restoration" },
      ],
      surfaces: ["Aluminium Vehicle Bodies", "Aluminium Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440010",
      code: "AC10",
      name: "TAR AND BITUMEN REMOVER",
      description:
        "A fast effective solvent based product designed for the rapid removal of bitumen, glue and tar from all painted surfaces. This product contains emulsifiers to enable rinsing off with water.",
      highlights: [
        "Fast solvent based remover",
        "Removes bitumen and tar",
        "Rinses off with water",
      ],
      features: [
        "Solvent-based rapid action formula",
        "Removes bitumen, glue, and tar",
        "Contains emulsifiers for water rinsing",
        "Safe for painted surfaces",
        "Fast and effective cleaning",
      ],
      applications: [
        { icon: Sparkles, text: "Vehicle Surface Cleaning" },
        { icon: Shield, text: "Heavy Duty Transport" },
        { icon: CheckCircle, text: "Painted Surface Maintenance" },
      ],
      surfaces: ["Painted Vehicle Surfaces", "Metal Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440011",
      code: "AC11",
      name: "CARPET SHAMPOO",
      description:
        "A carpet and upholstery shampoo for use on water washable colourfast carpets and fabrics, through spray extraction machines which removes a wide range of soiling and revitalises the pile and look of fabrics, carpets and upholstery materials. It will destroy odour arising from body fluids, moulds, mites and general soiling.",
      highlights: [
        "Shampoo for carpets upholstery",
        "Removes wide range soiling",
        "Destroys body fluid odors",
      ],
      features: [
        "Formulated for spray extraction machines",
        "Removes diverse soiling types",
        "Eliminates odours from body fluids",
        "Revitalises carpet and upholstery pile",
        "Safe for colourfast fabrics",
        "Enhances fabric appearance",
      ],
      applications: [
        { icon: Sparkles, text: "Vehicle Interior Cleaning" },
        { icon: Droplets, text: "Spray Extraction Cleaning" },
        { icon: CheckCircle, text: "Upholstery Maintenance" },
      ],
      surfaces: [
        "Colourfast Carpets",
        "Upholstery Fabrics",
        "Water-Washable Fabrics",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440012",
      code: "AC12",
      name: "UPHOLSTERY SHAMPOO",
      description:
        "A high foaming upholstery and carpet cleaner for manual use. Excellent for deep cleaning of the pile, as well as spot cleaning. Simply apply and agitate to create a foam which lifts the dirt away, then upon drying the dry foam can be vacuumed to leave a clean surface with no sticky residues.",
      highlights: [
        "High foaming carpet cleaner",
        "Deep cleans and spots",
        "Leaves no sticky residue",
      ],
      features: [
        "High foaming formula for manual use",
        "Effective for deep cleaning",
        "Ideal for spot cleaning",
        "Leaves no sticky residues",
        "Vacuumable dry foam",
        "Lifts dirt effectively",
      ],
      applications: [
        { icon: Sparkles, text: "Vehicle Interior Cleaning" },
        { icon: CheckCircle, text: "Manual Upholstery Cleaning" },
        { icon: Star, text: "Carpet Maintenance" },
      ],
      surfaces: ["Upholstery", "Carpets", "Fabric Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440013",
      code: "AC13",
      name: "SCREENWASH / DE-ICER (CONCENTRATE)",
      description:
        "This concentrated multi-purpose product can be used through a trigger spray for fast removal of ice. When diluted 1:4 in the screenwash bottle, it combines excellent anti-freeze properties with effective cleaning agents to give smear free vision throughout the year.",
      highlights: [
        "Concentrated ice removal spray",
        "Anti-freeze with clear vision",
        "Dilutes for year-round use",
      ],
      features: [
        "Concentrated formula, dilutable 1:4",
        "Fast ice removal via trigger spray",
        "Effective anti-freeze properties",
        "Provides smear-free vision",
        "Suitable for year-round use",
        "Cleans windscreens effectively",
      ],
      applications: [
        { icon: Sparkles, text: "Vehicle Windscreen Cleaning" },
        { icon: Droplets, text: "Winter De-Icing" },
        { icon: Shield, text: "Screenwash Application" },
      ],
      surfaces: ["Windscreens", "Automotive Glass"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440014",
      code: "AC14",
      name: "SCREENWASH / DE-ICER (RTU)",
      description:
        "This ready to use multi-purpose product can be used through a trigger spray for fast removal of ice. When used in the screenwash bottle, it combines excellent anti-freeze properties with effective cleaning agents to give smear free vision throughout the year.",
      highlights: [
        "Ready-to-use ice remover",
        "Provides anti-freeze clarity",
        "Ensures year-round vision",
      ],
      features: [
        "Ready-to-use formula",
        "Fast ice removal via trigger spray",
        "Effective anti-freeze properties",
        "Provides smear-free vision",
        "Suitable for year-round use",
        "Cleans windscreens effectively",
      ],
      applications: [
        { icon: Sparkles, text: "Vehicle Windscreen Cleaning" },
        { icon: Droplets, text: "Winter De-Icing" },
        { icon: Shield, text: "Screenwash Application" },
      ],
      surfaces: ["Windscreens", "Automotive Glass"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440015",
      code: "AC15",
      name: "CRYSTAL CLEAR GLASS CLEANER",
      description:
        "A ready-to-use, multi-purpose alcohol based glass and plastic cleaner for use through a trigger spray, which cuts through grease and dirt to leave a streak and smear-free, sparkling finish. Free from ammonia and abrasives, Crystal Clear is excellent for windscreens, mirrors, automotive glass, stainless steel, aluminium and all hard surfaces. Ideal for use in all forms of transport and automotive vehicles.",
      highlights: [
        "Alcohol based glass cleaner",
        "Removes grease streak-free",
        "Safe for all surfaces",
      ],
      features: [
        "Ready-to-use alcohol-based formula",
        "Cuts through grease and dirt",
        "Streak and smear-free finish",
        "Ammonia and abrasive-free",
        "Trigger spray for easy application",
        "Safe for multiple hard surfaces",
      ],
      applications: [
        { icon: Sparkles, text: "Automotive Glass Cleaning" },
        { icon: Building2, text: "Transport Vehicles" },
        { icon: CheckCircle, text: "Surface Maintenance" },
      ],
      surfaces: [
        "Windscreens",
        "Mirrors",
        "Automotive Glass",
        "Stainless Steel",
        "Aluminium",
        "Hard Surfaces",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440016",
      code: "AC16",
      name: "ANTIFOG",
      description:
        "A specialist treatment for the inside of automotive glass. When applied to clean glass it prevents the build-up of fog, haze or misting of the glass in damp conditions. An essential safety aid in winter.",
      highlights: [
        "Specialist anti-fog treatment",
        "Prevents glass misting",
        "Safety aid in winter",
      ],
      features: [
        "Prevents fog, haze, and misting",
        "Designed for automotive glass interiors",
        "Enhances visibility in damp conditions",
        "Essential for winter safety",
        "Easy to apply on clean glass",
      ],
      applications: [
        { icon: Sparkles, text: "Vehicle Glass Treatment" },
        { icon: Droplets, text: "Winter Safety" },
        { icon: Shield, text: "Visibility Enhancement" },
      ],
      surfaces: ["Automotive Glass Interiors"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440017",
      code: "AC17",
      name: "RAIN REPELLENT",
      description:
        "A specialist treatment for the outside of automotive glass. When applied to clean glass it forms a hydrophobic coating that prevents water and dirt from building up on the surface of the glass in wet conditions. An essential safety aid in winter.",
      highlights: [
        "Specialist rain repellent coating",
        "Prevents water and dirt",
        "Safety aid in winter",
      ],
      features: [
        "Forms hydrophobic coating",
        "Prevents water and dirt buildup",
        "Designed for automotive glass exteriors",
        "Enhances visibility in wet conditions",
        "Essential for winter safety",
      ],
      applications: [
        { icon: Sparkles, text: "Vehicle Glass Treatment" },
        { icon: Droplets, text: "Wet Weather Protection" },
        { icon: Shield, text: "Visibility Enhancement" },
      ],
      surfaces: ["Automotive Glass Exteriors"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440018",
      code: "AC18",
      name: "NEW CAR POLISH",
      description:
        "A high quality polish containing a rich blend of silicones and waxes (including Carnauba Wax) for use on new and nearly new vehicles. A professional quality PDI car polish designed to enhance the finish of cars protecting the paintwork, leaving a gloss finish. For use in car valeting and the automotive and transport industries.",
      highlights: [
        "High quality car polish",
        "Enhances with gloss finish",
        "Protects new vehicle paint",
      ],
      features: [
        "Contains silicones and Carnauba Wax",
        "Enhances gloss finish",
        "Protects new vehicle paintwork",
        "Professional quality for PDI",
        "Ideal for car valeting",
        "Long-lasting shine",
      ],
      applications: [
        { icon: Sparkles, text: "New Vehicle Polishing" },
        { icon: Shield, text: "Transport Industry" },
        { icon: Star, text: "Car Valeting" },
      ],
      surfaces: ["Vehicle Paintwork"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440019",
      code: "AC19",
      name: "UNIVERSAL CAR POLISH",
      description:
        "A high quality polish containing a rich blend of silicones and waxes (including Carnauba Wax) for use on used vehicles. A professional quality car polish designed for the renovation of faded automotive paintwork cutting back the faded paintwork to leave a glossy finish. For use in car valeting and the automotive and transport industries.",
      highlights: [
        "High quality polish renovation",
        "Restores faded paintwork",
        "Leaves glossy finish",
      ],
      features: [
        "Contains silicones and Carnauba Wax",
        "Restores faded paintwork",
        "Provides glossy finish",
        "Professional quality for valeting",
        "Suitable for used vehicles",
        "Enhances paint appearance",
      ],
      applications: [
        { icon: Sparkles, text: "Used Vehicle Polishing" },
        { icon: Shield, text: "Transport Industry" },
        { icon: Star, text: "Car Valeting" },
      ],
      surfaces: ["Vehicle Paintwork"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440020",
      code: "AC20",
      name: "LEATHER PROTECTION CREAM",
      description:
        "A premium quality leather protection treatment for use on most types of leather goods and upholstery.",
      highlights: [
        "Premium leather protection cream",
        "Treats various leather goods",
        "Protects upholstery effectively",
      ],
      features: [
        "Premium quality protective cream",
        "Protects various leather types",
        "Enhances leather durability",
        "Suitable for upholstery",
        "Easy to apply",
      ],
      applications: [
        { icon: Shield, text: "Vehicle Interior Protection" },
        { icon: CheckCircle, text: "Leather Upholstery" },
        { icon: Star, text: "Leather Goods Maintenance" },
      ],
      surfaces: ["Leather Upholstery", "Leather Goods"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440021",
      code: "AC21",
      name: "LEATHER CLEANER",
      description:
        "A premium quality leather cleaner which cleans, freshens and conditions most types of leather goods and upholstery",
      highlights: [
        "Premium leather cleaning product",
        "Freshens and conditions leather",
        "Suitable for upholstery",
      ],
      features: [
        "Premium quality cleaner",
        "Cleans and freshens leather",
        "Conditions leather surfaces",
        "Suitable for various leather types",
        "Ideal for upholstery cleaning",
      ],
      applications: [
        { icon: Sparkles, text: "Vehicle Interior Cleaning" },
        { icon: CheckCircle, text: "Leather Upholstery" },
        { icon: Star, text: "Leather Goods Maintenance" },
      ],
      surfaces: ["Leather Upholstery", "Leather Goods"],
    },
  ],
  "Building Chemicals": [
    {
      id: "550e8400-e29b-41d4-a716-446655440022",
      code: "BR1",
      name: "SANDSTONE CLEANER",
      description:
        "Sandstone Cleaner is a powerful acidic product formulated for the removal of dirt and grime from sandstone, unpolished granite, terracotta and bricks. It also removes iron stains from masonry.",
      highlights: [
        "Powerful acidic stone cleaner",
        "Removes dirt and grime",
        "Eliminates iron stains",
      ],
      features: [
        "Powerful acidic formulation",
        "Removes dirt and grime effectively",
        "Eliminates iron stains",
        "Safe for sandstone and granite",
        "Restores masonry appearance",
      ],
      applications: [
        { icon: Building2, text: "Masonry Restoration" },
        { icon: Sparkles, text: "Brick and Stone Cleaning" },
        { icon: Shield, text: "Historic Structures" },
      ],
      surfaces: [
        "Sandstone",
        "Unpolished Granite",
        "Terracotta",
        "Bricks",
        "Masonry",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440023",
      code: "BR2",
      name: "YELLOW BRICK CLEANER",
      description:
        "Yellow Brick Cleaner is a viscous acidic product developed specially to clean yellow bricks. The viscous nature of the product allows it to cling to vertical surfaces for an enhanced dwell time. Formulated to reduce the adverse dark stain which can result from using other products.",
      highlights: [
        "Viscous yellow brick cleaner",
        "Clings to vertical surfaces",
        "Reduces dark staining",
      ],
      features: [
        "Viscous acidic formulation",
        "Clings to vertical surfaces",
        "Reduces dark staining risks",
        "Designed for yellow bricks",
        "Enhanced cleaning dwell time",
      ],
      applications: [
        { icon: Building2, text: "Yellow Brick Cleaning" },
        { icon: Sparkles, text: "Masonry Maintenance" },
        { icon: CheckCircle, text: "Surface Restoration" },
      ],
      surfaces: ["Yellow Bricks", "Masonry Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440024",
      code: "BR3",
      name: "RED SANDSTONE CLEANER",
      description:
        "Red Sandstone Cleaner has been developed for the quick and easy cleaning of red sandstone. Based on a blend of powerful mineral acids, this product prevents the formation of white incrustations that can appear on porous red stones.",
      highlights: [
        "Quick red sandstone cleaner",
        "Prevents white incrustations",
        "Uses mineral acids",
      ],
      features: [
        "Powerful mineral acid blend",
        "Prevents white incrustations",
        "Quick and easy cleaning",
        "Designed for red sandstone",
        "Safe for porous stones",
      ],
      applications: [
        { icon: Building2, text: "Red Sandstone Restoration" },
        { icon: Sparkles, text: "Stone Cleaning" },
        { icon: Shield, text: "Historic Structures" },
      ],
      surfaces: ["Red Sandstone", "Porous Stones"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440025",
      code: "BR4",
      name: "MASONRY DEGREASANT GEL",
      description:
        "A heavy duty alkaline gel formulation used for the breaking and removal of black carbon dust, oils and greases from any masonry surface. This formulation acts as a heavy duty masonry degreasant and can also be used for the total cleaning of calcited stone.",
      highlights: [
        "Heavy duty masonry gel",
        "Removes carbon and grease",
        "Cleans calcited stone",
      ],
      features: [
        "Heavy duty alkaline gel",
        "Removes black carbon dust",
        "Effective on oils and greases",
        "Cleans calcited stone surfaces",
        "Clings to masonry for deep cleaning",
      ],
      applications: [
        { icon: Building2, text: "Masonry Cleaning" },
        { icon: Sparkles, text: "Stone Degreasing" },
        { icon: CheckCircle, text: "Heavy Duty Surface Maintenance" },
      ],
      surfaces: ["Masonry Surfaces", "Calcited Stone"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440026",
      code: "BR5",
      name: "MASONRY DEGREASANT SPRAY",
      description:
        "A heavy duty alkaline masonry degreasant designed for spray application for the cleaning of calcited stone and masonry. This formula can be applied with careful spraying for the breaking and removal of black carbon dust, greases, oils and acid wash.",
      highlights: [
        "Alkaline spray degreasant",
        "Cleans calcited stone",
        "Removes carbon and oils",
      ],
      features: [
        "Heavy duty alkaline formula",
        "Designed for spray application",
        "Removes black carbon dust",
        "Effective on greases and oils",
        "Cleans calcited stone and masonry",
      ],
      applications: [
        { icon: Droplets, text: "Spray Cleaning" },
        { icon: Building2, text: "Masonry Maintenance" },
        { icon: Sparkles, text: "Stone Degreasing" },
      ],
      surfaces: ["Calcited Stone", "Masonry Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440027",
      code: "BR6",
      name: "LIMESTONE, MARBLE, AND PRECAST CONCRETE CLEANER",
      description:
        "This innovative product quickly cleans carbon and sulphuric deposits from limestone, marble, precast concrete etc. Limestone, Marble, And Precast Concrete Cleaner is formulated as a weak acidic solution and can be used as a neutraliser after an alkali wash.",
      highlights: [
        "Cleans carbon deposits fast",
        "Weak acidic neutraliser",
        "Suitable for marble",
      ],
      features: [
        "Weak acidic formulation",
        "Quickly removes carbon deposits",
        "Neutralizes after alkali wash",
        "Safe for limestone and marble",
        "Cleans precast concrete",
      ],
      applications: [
        { icon: Building2, text: "Stone Restoration" },
        { icon: Sparkles, text: "Marble and Limestone Cleaning" },
        { icon: CheckCircle, text: "Precast Concrete Maintenance" },
      ],
      surfaces: ["Limestone", "Marble", "Precast Concrete"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440028",
      code: "BR7",
      name: "DEGREASING SOLVENT",
      description:
        "Degreasing Solvent has been specifically developed to clean oils, grease and grime from very dirty surfaces, factories, garages, engineering shops etc. Formulated to be emulsifiable with water, Degreasing Solvent is also a good product for cleaning oil spillages.",
      highlights: [
        "Cleans oils and grime",
        "Emulsifiable with water",
        "Handles oil spillages",
      ],
      features: [
        "Powerful degreasing solvent",
        "Emulsifiable with water for rinsing",
        "Removes oils, grease, and grime",
        "Effective on oil spillages",
        "Suitable for industrial environments",
      ],
      applications: [
        { icon: Building2, text: "Industrial Cleaning" },
        { icon: Droplets, text: "Oil Spill Cleanup" },
        { icon: CheckCircle, text: "Garage Maintenance" },
      ],
      surfaces: ["Concrete Floors", "Walls", "Industrial Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440029",
      code: "BR8",
      name: "MASONRY WATER REPELLENT",
      description:
        "This specialised solvent based product inhibits the penetration of water into masonry, cement and stone surfaces. Recommended for use on external structures, it reduces dampness, water penetration and re-soiling.",
      highlights: [
        "Solvent based water repellent",
        "Inhibits masonry water penetration",
        "Reduces dampness effectively",
      ],
      features: [
        "Solvent-based water repellent",
        "Prevents water penetration",
        "Reduces dampness and re-soiling",
        "Suitable for external structures",
        "Protects masonry surfaces",
      ],
      applications: [
        { icon: Building2, text: "External Masonry Protection" },
        { icon: Shield, text: "Waterproofing" },
        { icon: CheckCircle, text: "Stone and Cement Maintenance" },
      ],
      surfaces: ["Masonry", "Cement", "Stone Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440030",
      code: "BR9",
      name: "MID WASH",
      description:
        "Mid Wash is ideal for the fast and efficient cleaning of vehicles, painted surfaces, tiles and floors, masonry, cement and stone. The technically advanced alkaline formula of Mid Wash makes it a universally suitable product which can be used on virtually any surface.",
      highlights: [
        "Fast vehicle surface cleaner",
        "Alkaline universal formula",
        "Cleans any surface",
      ],
      features: [
        "Advanced alkaline formula",
        "Fast and efficient cleaning",
        "Universal surface compatibility",
        "Cleans vehicles and masonry",
        "Suitable for tiles and floors",
      ],
      applications: [
        { icon: Sparkles, text: "Vehicle Cleaning" },
        { icon: Building2, text: "Masonry and Stone Cleaning" },
        { icon: CheckCircle, text: "Tile and Floor Maintenance" },
      ],
      surfaces: [
        "Painted Surfaces",
        "Tiles",
        "Floors",
        "Masonry",
        "Cement",
        "Stone",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440031",
      code: "BR10",
      name: "ALGAE / MOSS AND MILDEW REMOVER (Q)",
      description:
        "Algae / Moss and Mildew Remover (Q) is a quaternary based product which will kill algae, moss, and mildew safely and effectively. It aids the removal of undesirable growth from masonry and hard surfaces.",
      highlights: [
        "Quaternary algae remover",
        "Kills moss and mildew",
        "Cleans hard surfaces",
      ],
      features: [
        "Quaternary-based formula",
        "Kills algae, moss, and mildew",
        "Safe and effective cleaning",
        "Removes undesirable growth",
        "Suitable for hard surfaces",
      ],
      applications: [
        { icon: Building2, text: "Masonry Maintenance" },
        { icon: Sparkles, text: "Algae and Moss Removal" },
        { icon: CheckCircle, text: "Hard Surface Cleaning" },
      ],
      surfaces: ["Masonry", "Hard Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440032",
      code: "BR11",
      name: "ALGAE / MOSS AND MILDEW REMOVER (C)",
      description:
        "Algae / Moss and Mildew Remover (C) is a chlorine based product which will kill algae, moss, and mildew safely and effectively. It aids the removal of undesirable growth from masonry and hard surfaces.",
      highlights: [
        "Chlorine based algae remover",
        "Kills moss and mildew",
        "Cleans hard surfaces",
      ],
      features: [
        "Chlorine-based formula",
        "Kills algae, moss, and mildew",
        "Safe and effective cleaning",
        "Removes undesirable growth",
        "Suitable for hard surfaces",
      ],
      applications: [
        { icon: Building2, text: "Masonry Maintenance" },
        { icon: Sparkles, text: "Algae and Moss Removal" },
        { icon: CheckCircle, text: "Hard Surface Cleaning" },
      ],
      surfaces: ["Masonry", "Hard Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440033",
      code: "BR12",
      name: "CEMENT AND MORTAR REMOVER",
      description:
        "Cement And Mortar Remover is a mineral acid based product which has been formulated for the rapid removal of cement and mortar stains from brick and sandstone. This versatile product can safely be used for the cleaning of concrete structures and concrete mixers.",
      highlights: [
        "Acid based cement remover",
        "Removes mortar stains fast",
        "Cleans concrete structures",
      ],
      features: [
        "Mineral acid-based formula",
        "Rapidly removes cement stains",
        "Effective on mortar stains",
        "Safe for concrete structures",
        "Suitable for concrete mixers",
      ],
      applications: [
        { icon: Building2, text: "Brick and Sandstone Cleaning" },
        { icon: CheckCircle, text: "Concrete Structure Maintenance" },
        { icon: Sparkles, text: "Concrete Mixer Cleaning" },
      ],
      surfaces: ["Brick", "Sandstone", "Concrete Structures"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440034",
      code: "BR13",
      name: "SILICONE WATER SEALER REPELLENT",
      description:
        "A water based Silicone solution formulated as a water repellent for above ground use on porous exterior surfaces, etc. Can be used on a wide variety of exterior hard surfaces including brick, stone, masonry, concrete, cement / mineral boards, unglazed tiles, wood, canvas, leather, etc. Provides an effective waterproofing action; remains permeable to vapour, so the structure can breathe.",
      highlights: [
        "Water based silicone sealer",
        "Repels water on surfaces",
        "Permeable for vapour",
      ],
      features: [
        "Water-based silicone solution",
        "Effective waterproofing action",
        "Vapour permeable coating",
        "Suitable for porous surfaces",
        "Protects multiple exterior materials",
      ],
      applications: [
        { icon: Building2, text: "Exterior Surface Protection" },
        { icon: Shield, text: "Waterproofing" },
        { icon: CheckCircle, text: "Masonry and Stone Maintenance" },
      ],
      surfaces: [
        "Brick",
        "Stone",
        "Masonry",
        "Concrete",
        "Cement Boards",
        "Unglazed Tiles",
        "Wood",
        "Canvas",
        "Leather",
      ],
    },
  ],
  "Drain Chemicals": [
    {
      id: "550e8400-e29b-41d4-a716-446655440035",
      code: "DC1",
      name: "CITRUS DRAIN CLEANER",
      description:
        "A novel drain cleaner and maintainer based on citrus peel extracts. Citrus Drain Cleaner quickly dissolves oils, fats and grease, leaving a long and lingering citrus odour. Regular use of this product will keep drains clear, thus avoiding future blockages.",
      highlights: [
        "Citrus based drain cleaner",
        "Dissolves oils and grease",
        "Prevents drain blockages",
      ],
      features: [
        "Citrus peel extract formula",
        "Quickly dissolves oils and grease",
        "Leaves lingering citrus odour",
        "Prevents future blockages",
        "Maintains clear drains",
      ],
      applications: [
        { icon: Droplets, text: "Drain Maintenance" },
        { icon: CheckCircle, text: "Kitchen and Bathroom Drains" },
        { icon: Shield, text: "Plumbing Systems" },
      ],
      surfaces: ["Drain Pipes", "Sinks", "Plumbing Systems"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440036",
      code: "DC2",
      name: "BUSTER",
      description:
        "A highly concentrate acidic drain opener for instant results. Based on Sulphuric Acid, Buster dissolves fats, grease, hair, body waste, toilet paper, tissues and sanitary towels.",
      highlights: [
        "Acidic instant drain opener",
        "Dissolves grease and hair",
        "Clears sanitary waste",
      ],
      features: [
        "Highly concentrated sulphuric acid formula",
        "Instant drain unblocking",
        "Dissolves fats, grease, and hair",
        "Clears toilet paper and sanitary waste",
        "Fast-acting solution",
      ],
      applications: [
        { icon: Droplets, text: "Drain Unblocking" },
        { icon: CheckCircle, text: "Sanitary System Cleaning" },
        { icon: Shield, text: "Plumbing Maintenance" },
      ],
      surfaces: ["Drain Pipes", "Toilets", "Sanitary Systems"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440037",
      code: "DC3",
      name: "BIO-M",
      description:
        "Fully biodegradable, biological activated concentrated enzyme. Bio-M is based on naturally occurring bacteria which live on oils, fats and organic matter. This is the latest development in bio chemistry. An ideal product to keep drains, grease traps, interceptors and pipelines clean and free flowing.",
      highlights: [
        "Biodegradable enzyme cleaner",
        "Targets oils and fats",
        "Keeps pipelines clear",
      ],
      features: [
        "Fully biodegradable enzyme formula",
        "Uses naturally occurring bacteria",
        "Targets oils, fats, and organic matter",
        "Keeps drains and pipelines clear",
        "Ideal for grease traps and interceptors",
      ],
      applications: [
        { icon: Droplets, text: "Drain Maintenance" },
        { icon: CheckCircle, text: "Pipeline Cleaning" },
        { icon: Shield, text: "Eco-Friendly Cleaning" },
      ],
      surfaces: ["Drains", "Grease Traps", "Pipelines", "Interceptors"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440038",
      code: "DC4",
      name: "FLOW",
      description:
        "A concentrated caustic drain cleaner and plughole unblocker. For use on blocked and slow moving plugholes, drains and sanitary systems. The ideal product to dissolve hair, toilet paper, oil, fat and grease. Regular use will keep the drains free flowing.",
      highlights: [
        "Caustic drain unblocker",
        "Dissolves hair and grease",
        "Maintains free flowing drains",
      ],
      features: [
        "Concentrated caustic formula",
        "Dissolves hair, oil, and grease",
        "Unblocks plugholes and drains",
        "Maintains free-flowing systems",
        "Suitable for sanitary systems",
      ],
      applications: [
        { icon: Droplets, text: "Drain Unblocking" },
        { icon: CheckCircle, text: "Sanitary System Cleaning" },
        { icon: Shield, text: "Plumbing Maintenance" },
      ],
      surfaces: ["Plugholes", "Drains", "Sanitary Systems"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440039",
      code: "DC5",
      name: "ANTISEPTIC DISINFECTANT",
      description:
        "Antiseptic disinfectant concentrate: (RW 3/5) containing 1.2% Chloroxylenols. Designed for regular use on all hard surfaces to maintain clean and hygienic conditions. This product can be used safely on any water washable surface. Ideal to disinfect and deodorise washroom areas, toilets, urinals, floors, drains, rubbish bins, waste disposal chutes, carpets, entrance matting, sunbeds, sports equipment, etc.",
      highlights: [
        "Antiseptic surface disinfectant",
        "Cleans and deodorises areas",
        "Safe for water surfaces",
      ],
      features: [
        "Contains 1.2% Chloroxylenols",
        "Antiseptic disinfectant concentrate",
        "Safe for water-washable surfaces",
        "Deodorises and disinfects",
        "Suitable for regular use",
      ],
      applications: [
        { icon: Sparkles, text: "Washroom Disinfection" },
        { icon: CheckCircle, text: "Waste Bin Cleaning" },
        { icon: Shield, text: "Hygienic Surface Maintenance" },
      ],
      surfaces: [
        "Toilets",
        "Urinals",
        "Floors",
        "Drains",
        "Rubbish Bins",
        "Carpets",
        "Entrance Matting",
        "Sunbeds",
        "Sports Equipment",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440040",
      code: "DC6",
      name: "ODOURKILL",
      description:
        "Highly perfumed re-odouriser for use in sewerage plants, farms and malodourous areas. Odourkill kills odour producing bacteria and fungi, neutralising unpleasant odours. Recommended for use in washroom areas, floors, toilets, urinals, drains and cisterns. Also highly effective on waste and rubbish bins, rubbish carts, waste disposal chutes, carpets and entrance matting.",
      highlights: [
        "Perfumed odour neutraliser",
        "Kills bacteria and fungi",
        "Cleans washroom drains",
      ],
      features: [
        "Highly perfumed formula",
        "Neutralises unpleasant odours",
        "Kills odour-causing bacteria and fungi",
        "Effective in washroom areas",
        "Suitable for waste bins and carpets",
      ],
      applications: [
        { icon: Sparkles, text: "Washroom Odour Control" },
        { icon: CheckCircle, text: "Waste Bin Deodorising" },
        { icon: Shield, text: "Agricultural Odour Management" },
      ],
      surfaces: [
        "Toilets",
        "Urinals",
        "Drains",
        "Cisterns",
        "Rubbish Bins",
        "Carpets",
        "Entrance Matting",
      ],
    },
  ],
  "Food Processing": [
    {
      id: "550e8400-e29b-41d4-a716-446655440041",
      code: "FP1",
      name: "CHLORCLEAN",
      description:
        "A chlorinated detergent sanitiser that is ideal for daily disinfection in the food industry. Chlorclean sanitises and cleans all hard surfaces safely. Use on a regular basis for cleaning and disinfecting work surfaces, equipment, floors, walls, delivery vehicles, etc. Suitable for use in a range of industries, including; kitchens, bakeries, confectioners, meat preparation, breweries, shops, butchers, hospitals, restaurants and canteens.",
      highlights: [
        "Chlorinated food sanitiser",
        "Cleans hard surfaces safely",
        "Disinfects various areas",
      ],
      features: [
        "Chlorinated detergent formula",
        "Safe for daily disinfection",
        "Cleans and sanitises hard surfaces",
        "Suitable for food industry",
        "Effective on multiple surfaces",
      ],
      applications: [
        { icon: Utensils, text: "Food Preparation Areas" },
        { icon: Truck, text: "Delivery Vehicle Cleaning" },
        { icon: Hospital, text: "Hygienic Environments" },
      ],
      surfaces: [
        "Work Surfaces",
        "Equipment",
        "Floors",
        "Walls",
        "Delivery Vehicles",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440042",
      code: "FP2",
      name: "CAUSTIC FOAM",
      description:
        "Caustic Foam is an odourless cleaner and sanitiser that will cope with a high level of soiling due to its caustic content. Suitable for use on all water washable surfaces. Application via a pressure washer fitted with a foam lance, makes it easy to use and essential for sanitising awkward areas. Ideal for vertical surfaces as the foam clings to the surface to allow a greater contact time, thus giving the product longer to work.",
      highlights: [
        "Odourless caustic sanitiser",
        "Clings to vertical surfaces",
        "Cleans high soiling",
      ],
      features: [
        "Caustic-based cleaning formula",
        "Odourless sanitiser",
        "Clings to vertical surfaces",
        "Handles high levels of soiling",
        "Pressure washer foam lance compatible",
      ],
      applications: [
        { icon: SprayCan, text: "Foam Lance Sanitising" },
        { icon: Utensils, text: "Food Processing Areas" },
        { icon: Shield, text: "Vertical Surface Cleaning" },
      ],
      surfaces: ["Water-Washable Surfaces", "Vertical Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440043",
      code: "FP3",
      name: "POWERWASH",
      description:
        "A powerful, alkaline cleaner and degreaser, designed to perform quickly to maintain hygiene in food environments. Ideal for cleaning food oils, fats, blood, dirt, industrial oils and grease from a multitude of surfaces such as concrete floors, industrial paintwork and painted floors, plastic walls and ceilings, ceramic tiles, plastic coatings, machinery and equipment, stainless steel etc. Ideal for use in slaughter houses.",
      highlights: [
        "Powerful alkaline degreaser",
        "Cleans food oils fast",
        "Suitable for slaughterhouses",
      ],
      features: [
        "Powerful alkaline formula",
        "Removes food oils and grease",
        "Fast-acting hygiene maintenance",
        "Suitable for slaughterhouses",
        "Cleans diverse surfaces",
      ],
      applications: [
        { icon: Utensils, text: "Food Processing Facilities" },
        { icon: Factory, text: "Slaughterhouse Cleaning" },
        { icon: Shield, text: "Industrial Hygiene" },
      ],
      surfaces: [
        "Concrete Floors",
        "Painted Surfaces",
        "Plastic Walls and Ceilings",
        "Ceramic Tiles",
        "Stainless Steel",
        "Machinery",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440044",
      code: "FP4",
      name: "HYPO",
      description:
        "A powerful bleach suitable for disinfecting and sterilising applications and as a biocide. Contains 4.5% active Sodium Hypochlorite.",
      highlights: [
        "Powerful disinfecting bleach",
        "Acts as a biocide",
        "Contains sodium hypochlorite",
      ],
      features: [
        "Contains 4.5% sodium hypochlorite",
        "Powerful disinfecting action",
        "Suitable for sterilising",
        "Acts as an effective biocide",
        "Ideal for food environments",
      ],
      applications: [
        { icon: Utensils, text: "Food Industry Disinfection" },
        { icon: Shield, text: "Sterilisation" },
        { icon: Droplets, text: "Hygienic Maintenance" },
      ],
      surfaces: ["Hard Surfaces", "Food Preparation Areas"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440045",
      code: "FP5",
      name: "DAIRY HYPO",
      description:
        "A concentrated industrial bleach suitable for heavy duty disinfecting and sterilising applications and as a biocide. Contains 12% active Sodium Hypochlorite.",
      highlights: [
        "Concentrated industrial bleach",
        "Heavy duty disinfecting",
        "Contains sodium hypochlorite",
      ],
      features: [
        "Contains 12% sodium hypochlorite",
        "Concentrated for heavy duty use",
        "Effective sterilising action",
        "Acts as a powerful biocide",
        "Ideal for dairy processing",
      ],
      applications: [
        { icon: Utensils, text: "Dairy Processing" },
        { icon: Shield, text: "Heavy Duty Sterilisation" },
        { icon: Droplets, text: "Industrial Hygiene" },
      ],
      surfaces: ["Hard Surfaces", "Dairy Equipment"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440046",
      code: "FP6",
      name: "TRAYWASH",
      description:
        "A concentrated low foaming product which can be diluted with water for use as an economical machine wash for trays, crates etc. Traywash is a water-based liquid that is 100% water soluble to provide a clean finish with ease of use.",
      highlights: [
        "Low foaming tray cleaner",
        "Dilutes for economical use",
        "Ensures clean finish",
      ],
      features: [
        "Concentrated low foaming formula",
        "Dilutable for economical use",
        "100% water soluble",
        "Provides clean finish",
        "Suitable for machine washing",
      ],
      applications: [
        { icon: Utensils, text: "Food Tray Cleaning" },
        { icon: Package, text: "Crate Washing" },
        { icon: Droplets, text: "Machine Washing" },
      ],
      surfaces: ["Trays", "Crates", "Food Containers"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440047",
      code: "FP7",
      name: "ODOURKILL",
      description:
        "Highly perfumed re-odouriser for use in sewerage plants, farms and malodourous areas. Odourkill kills odour producing bacteria and fungi, neutralising unpleasant odours. Recommended for use in washroom areas, floors, toilets, urinals, drains and cisterns. Also highly effective on waste and rubbish bins, rubbish carts, waste disposal chutes, carpets and entrance matting.",
      highlights: [
        "Perfumed odour neutraliser",
        "Kills bacteria and fungi",
        "Cleans washroom drains",
      ],
      features: [
        "Highly perfumed formula",
        "Neutralises unpleasant odours",
        "Kills odour-causing bacteria and fungi",
        "Effective in washroom areas",
        "Suitable for waste bins and carpets",
      ],
      applications: [
        { icon: Toilet, text: "Washroom Odour Control" },
        { icon: Trash, text: "Waste Bin Deodorising" },
        { icon: Tractor, text: "Agricultural Odour Management" },
      ],
      surfaces: [
        "Toilets",
        "Urinals",
        "Drains",
        "Cisterns",
        "Rubbish Bins",
        "Carpets",
        "Entrance Matting",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440048",
      code: "FP8",
      name: "LEMON DISINFECTANT",
      description:
        "A QAP30 triple action lemon fragranced disinfectant for general purpose disinfecting and for spray application for odour control. Cleans disinfects and deodorises in one action. Regular application protects surfaces from mould, bacteria and mildew.",
      highlights: [
        "Lemon fragranced disinfectant",
        "Cleans and deodorises",
        "Protects from mould",
      ],
      features: [
        "QAP30 triple action formula",
        "Lemon fragrance for odour control",
        "Cleans, disinfects, and deodorises",
        "Protects against mould and bacteria",
        "Suitable for spray application",
      ],
      applications: [
        { icon: Utensils, text: "Food Area Disinfection" },
        { icon: SprayCan, text: "Odour Control" },
        { icon: Shield, text: "Surface Protection" },
      ],
      surfaces: ["Hard Surfaces", "Food Preparation Areas"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440049",
      code: "FP9",
      name: "PINE DISINFECTANT",
      description:
        "A QAP30 triple action pine fragranced disinfectant for general purpose disinfecting and for spray application for odour control. Cleans disinfects and deodorises in one action. Regular application protects surfaces from mould, bacteria and mildew.",
      highlights: [
        "Pine fragranced disinfectant",
        "Cleans and deodorises",
        "Protects from mould",
      ],
      features: [
        "QAP30 triple action formula",
        "Pine fragrance for odour control",
        "Cleans, disinfects, and deodorises",
        "Protects against mould and bacteria",
        "Suitable for spray application",
      ],
      applications: [
        { icon: Utensils, text: "Food Area Disinfection" },
        { icon: SprayCan, text: "Odour Control" },
        { icon: Shield, text: "Surface Protection" },
      ],
      surfaces: ["Hard Surfaces", "Food Preparation Areas"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440050",
      code: "FP10",
      name: "CIP (CLEANING IN PLACE) DETERGENT",
      description:
        "A high performance detergent scientifically formulated for the CIP cleaning of food manufacturing facilities and production equipment. This highly 'built' cleaning detergent is extremely effective for the removal of a diverse range of materials such as proteins and soil. CIP Detergent is a low foaming cleaning product proven to be hard water tolerant and suitable for use with most materials. CIP Detergent is an ideal choice for use in CIP (Cleaning in Place) and power wash / spray wash systems.",
      highlights: [
        "High performance CIP detergent",
        "Removes proteins and soil",
        "Suitable for power wash",
      ],
      features: [
        "High performance CIP formula",
        "Removes proteins and soil",
        "Low foaming for machine use",
        "Hard water tolerant",
        "Suitable for power wash systems",
      ],
      applications: [
        { icon: Utensils, text: "Food Manufacturing Cleaning" },
        { icon: SprayCan, text: "CIP Systems" },
        { icon: Factory, text: "Production Equipment Maintenance" },
      ],
      surfaces: ["Food Processing Equipment", "Production Surfaces"],
    },
  ],
  "Hand Cleaners": [
    {
      id: "550e8400-e29b-41d4-a716-446655440051",
      code: "HC1",
      name: "CITRA BEAD",
      description:
        "A citrus based heavy duty beaded hand cleaning gel. Citra Bead will clean dirt, oils, grease and paints leaving a soft feeling skin after washing. Citra Bead also eliminates offensive odours such as fish and onions.",
      highlights: [
        "Citrus beaded hand gel",
        "Cleans grease and paints",
        "Eliminates fish odors",
      ],
      features: [
        "Citrus-based beaded gel formula",
        "Removes dirt, oils, grease, and paints",
        "Eliminates offensive odours",
        "Leaves skin soft and clean",
        "Heavy duty cleaning action",
      ],
      applications: [
        { icon: Hand, text: "Heavy Duty Hand Cleaning" },
        { icon: Paintbrush, text: "Paint and Grease Removal" },
        { icon: Fish, text: "Odour Elimination" },
      ],
      surfaces: ["Skin"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440052",
      code: "HC2",
      name: "JAFFA GEL",
      description:
        "A soft dispensable gel based on micro-beads and citrus oils. Ideal for normal usage as well as via pump dispensers, Jaffa Gel will clean dirt, grime and oils leaving the skin nice and soft.",
      highlights: [
        "Soft citrus micro-bead gel",
        "Cleans dirt and oils",
        "Leaves skin soft",
      ],
      features: [
        "Citrus oil and micro-bead formula",
        "Cleans dirt, grime, and oils",
        "Softens skin after use",
        "Suitable for pump dispensers",
        "Ideal for regular hand cleaning",
      ],
      applications: [
        { icon: Hand, text: "Daily Hand Cleaning" },
        { icon: PackageMinus, text: "Dispenser Use" },
        { icon: Droplets, text: "General Skin Cleaning" },
      ],
      surfaces: ["Skin"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440053",
      code: "HC3",
      name: "SLICK LIQUID SOAP",
      description:
        "A high activity soap giving a very effective degree of cleaning action, leaving the skin feeling soft, fresh and clean. Slick can be diluted and still retain the viscosity of soap.",
      highlights: [
        "High activity liquid soap",
        "Leaves skin fresh",
        "Dilutable with viscosity",
      ],
      features: [
        "High activity cleaning formula",
        "Leaves skin soft and fresh",
        "Dilutable while retaining viscosity",
        "Effective for thorough hand cleaning",
        "Suitable for regular use",
      ],
      applications: [
        { icon: Hand, text: "Hand Washing" },
        { icon: Droplets, text: "General Skin Cleaning" },
        { icon: Droplet, text: "Dispenser Use" },
      ],
      surfaces: ["Skin"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440054",
      code: "HC4",
      name: "PINK PEARL",
      description:
        "Pink Pearl is a premium quality pearlised hand and body soap which can be used in any situation where cleaning and sanitising are of the utmost importance. Pink Pearl is a premium soap formulated using the highest quality ingredients to produce a rich, mild foam, which is suitable for use on all skin types. Ideal for use in washrooms, bathrooms and shower areas. Recommended for use in offices, health clubs, hotels, nursing and residential homes.",
      highlights: [
        "Premium pearlised hand soap",
        "Produces mild rich foam",
        "Suitable for all skin",
      ],
      features: [
        "Premium quality pearlised soap",
        "Produces rich, mild foam",
        "Suitable for all skin types",
        "Ideal for sanitising environments",
        "Perfect for washrooms and showers",
      ],
      applications: [
        { icon: Hand, text: "Hand and Body Washing" },
        { icon: Building2, text: "Offices and Hotels" },
        { icon: Hospital, text: "Nursing Homes and Health Clubs" },
      ],
      surfaces: ["Skin"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440055",
      code: "HC5",
      name: "WHITE PEARL",
      description:
        "White Pearl is a premium quality pearlised bacterial lather soap and an ideal product where sanitisation is of utmost importance. White Pearl is a premium grade soap formulated to produce a rich, mild foam, which is suitable for use on all skin types. Ideal for use in washrooms, bathrooms and shower areas. Recommended for use in food processing and catering establishments, hotels, nursing and residential homes.",
      highlights: [
        "Premium bacterial lather soap",
        "Produces mild rich foam",
        "Ideal for sanitisation",
      ],
      features: [
        "Premium quality bacterial soap",
        "Produces rich, mild foam",
        "Suitable for all skin types",
        "Designed for high sanitisation needs",
        "Ideal for food and catering environments",
      ],
      applications: [
        { icon: Hand, text: "Sanitising Hand Washing" },
        { icon: Utensils, text: "Food Processing Areas" },
        { icon: Hospital, text: "Hotels and Nursing Homes" },
      ],
      surfaces: ["Skin"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440056",
      code: "HC6",
      name: "BARRIER CREAM",
      description:
        "Universal (wet and dry) barrier cream protecting the skin from solvents, paints, resins, tar, ink, adhesive, oils and grease",
      highlights: [
        "Universal barrier cream",
        "Protects from solvents",
        "Shields against grease",
      ],
      features: [
        "Protects skin in wet and dry conditions",
        "Shields against solvents and paints",
        "Prevents contact with tar and grease",
        "Protects from inks and adhesives",
        "Universal skin protection",
      ],
      applications: [
        { icon: Hand, text: "Skin Protection" },
        { icon: Paintbrush, text: "Industrial Work" },
        { icon: Shield, text: "Barrier Application" },
      ],
      surfaces: ["Skin"],
    },
  ],
  "Kitchen & Catering Chemicals": [
    {
      id: "550e8400-e29b-41d4-a716-446655440057",
      code: "KC1",
      name: "OVEN AND GRILL CLEANER GEL",
      description:
        "This product is a heavy duty caustic gel Oven and Grill Cleaner which rapidly removes oils, fat, grease and carbonising deposits from every part of ovens and grills. The viscosity of this product helps it cling to vertical surfaces allowing extended contact time.",
      highlights: [
        "Caustic gel oven cleaner",
        "Removes grease fast",
        "Clings to surfaces",
      ],
      features: [
        "Heavy duty caustic gel formula",
        "Rapidly removes oils and grease",
        "Clings to vertical surfaces",
        "Extended contact time for cleaning",
        "Effective on carbonised deposits",
      ],
      applications: [
        { icon: Utensils, text: "Oven Cleaning" },
        { icon: Flame, text: "Grill Maintenance" },
        { icon: Droplets, text: "Kitchen Equipment Cleaning" },
      ],
      surfaces: ["Oven Surfaces", "Grills", "Metal Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440058",
      code: "KC2",
      name: "OVEN AND GRILL CLEANER SPRAY",
      description:
        "This product is a heavy duty caustic liquid Oven and Grill Cleaner which rapidly removes oils, fat, grease and carbonising deposits from every part of ovens and grills. This product is used as a spray on, wash off system.",
      highlights: [
        "Caustic spray oven cleaner",
        "Removes grease quickly",
        "Wash off system",
      ],
      features: [
        "Heavy duty caustic liquid formula",
        "Rapidly removes oils and grease",
        "Spray on, wash off application",
        "Effective on carbonised deposits",
        "Suitable for oven and grill cleaning",
      ],
      applications: [
        { icon: Utensils, text: "Oven Cleaning" },
        { icon: Flame, text: "Grill Maintenance" },
        { icon: SprayCan, text: "Spray Cleaning" },
      ],
      surfaces: ["Oven Surfaces", "Grills", "Metal Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440059",
      code: "KC3",
      name: "DISH WASH",
      description:
        "A powerful premium detergent for machine dishwashing to removes stubborn soiling with ease. Dish Wash has been formulated be used effectively in both soft and hard water areas. Suitable for all automatic dish washing machines in food and catering establishments. Ideal for washing cutlery, crockery, stainless steel and utensils. An excellent product for removing nicotine and lipstick stains.",
      highlights: [
        "Premium dishwashing detergent",
        "Removes stubborn soiling",
        "Cleans cutlery easily",
      ],
      features: [
        "Powerful premium detergent",
        "Effective in soft and hard water",
        "Removes stubborn soiling",
        "Suitable for dishwashing machines",
        "Cleans nicotine and lipstick stains",
      ],
      applications: [
        { icon: Utensils, text: "Dishwashing" },
        { icon: UtensilsCrossed, text: "Cutlery and Crockery Cleaning" },
        { icon: Utensils, text: "Catering Establishments" },
      ],
      surfaces: ["Cutlery", "Crockery", "Stainless Steel", "Utensils"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440060",
      code: "KC4",
      name: "GLASS WASH",
      description:
        "A powerful premium detergent for machine dishwashing to removes stubborn soiling with ease. Glass Wash has been formulated to be used effectively in both soft and hard water areas. Suitable for all automatic glass washing machines in pubs, bars and catering establishments. Odourless, tasteless, with no ill effects on beer or spirits. Leaves glassware sparkling clear. An excellent product for removing lipstick stains.",
      highlights: [
        "Premium glass washing detergent",
        "Removes soiling easily",
        "Leaves glassware clear",
      ],
      features: [
        "Powerful premium detergent",
        "Effective in soft and hard water",
        "Odourless and tasteless",
        "Leaves glassware sparkling",
        "Removes lipstick stains",
      ],
      applications: [
        { icon: GlassWater, text: "Glassware Cleaning" },
        { icon: Beer, text: "Pubs and Bars" },
        { icon: Utensils, text: "Catering Establishments" },
      ],
      surfaces: ["Glassware"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440061",
      code: "KC5",
      name: "PHOS DE-SCALER",
      description:
        "An mildly acidic product formulated to descale automatic dish and glass washing machines to give fast drying and a sparkling finish to the cleaning cycle. Safe to use on crockery, cutlery and glassware.",
      highlights: [
        "Mild acidic descaler",
        "Ensures fast drying",
        "Safe for glassware",
      ],
      features: [
        "Mildly acidic formula",
        "Descales dish and glass machines",
        "Promotes fast drying",
        "Ensures sparkling finish",
        "Safe for crockery and glassware",
      ],
      applications: [
        { icon: WashingMachine, text: "Dishwasher Maintenance" },
        { icon: GlassWater, text: "Glassware Descaling" },
        { icon: UtensilsCrossed, text: "Cutlery and Crockery Cleaning" },
      ],
      surfaces: ["Crockery", "Cutlery", "Glassware", "Dishwashing Machines"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440062",
      code: "KC6",
      name: "RINSE-AID",
      description:
        "Rinse-Aid is a specially formulated rinse additive for all automatic dish and glass washing machines. It prevents spots and hazing on crockery and glassware, leaving a sparkling finish. Rinse-Aid is mildly acidic to neutralise detergent deposits. Suitable for use through automatic dosing equipment or by manual dosing.",
      highlights: [
        "Specially formulated rinse aid",
        "Prevents spots and hazing",
        "Neutralises detergent deposits",
      ],
      features: [
        "Mildly acidic rinse additive",
        "Prevents spots and hazing",
        "Neutralises detergent residues",
        "Suitable for automatic dosing",
        "Ensures sparkling finish",
      ],
      applications: [
        { icon: WashingMachine, text: "Dishwasher Rinse" },
        { icon: GlassWater, text: "Glassware Cleaning" },
        { icon: UtensilsCrossed, text: "Crockery Maintenance" },
      ],
      surfaces: ["Crockery", "Glassware", "Dishwashing Machines"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440063",
      code: "KC7",
      name: "BEER LINE CLEANER",
      description:
        "Beer Liner Cleaner is a beer pump and pipeline cleaner that kills bacteria and yeasts, ensuring that beer stays in top condition. Beer Liner Cleaner is designed to clean beer pumps and pipelines quickly and efficiently. Cleans and sterilises all plastic and stainless steel; beer pumps, pipelines and tanks within the brewing industry. Extensively used in pubs, clubs, nightclubs, restaurants and bars to ensure that the quality of beer is maintained.",
      highlights: [
        "Cleans beer pumps efficiently",
        "Kills bacteria and yeasts",
        "Maintains beer quality",
      ],
      features: [
        "Kills bacteria and yeasts",
        "Cleans beer pumps and pipelines",
        "Sterilises plastic and stainless steel",
        "Ensures high beer quality",
        "Fast and efficient cleaning",
      ],
      applications: [
        { icon: Beer, text: "Beer Line Cleaning" },
        { icon: Utensils, text: "Pubs and Restaurants" },
        { icon: Barrel, text: "Brewing Equipment Maintenance" },
      ],
      surfaces: [
        "Beer Pumps",
        "Pipelines",
        "Tanks",
        "Plastic Surfaces",
        "Stainless Steel",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440064",
      code: "KC8",
      name: "TERSAN",
      description:
        "A terminal sanitising product which cleans and kills viruses, bacteria, mould and fungi. This product is used where sanitising conditions are of the utmost importance.",
      highlights: [
        "Terminal sanitising product",
        "Kills viruses and mould",
        "Ensures hygienic conditions",
      ],
      features: [
        "Powerful sanitising formula",
        "Kills viruses, bacteria, and fungi",
        "Ensures high hygiene standards",
        "Suitable for critical sanitising needs",
        "Effective on mould",
      ],
      applications: [
        { icon: Utensils, text: "Food Area Sanitisation" },
        { icon: Shield, text: "Hygienic Cleaning" },
        { icon: Utensils, text: "Catering Establishments" },
      ],
      surfaces: ["Hard Surfaces", "Food Preparation Areas"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440065",
      code: "KC9",
      name: "WASH-UP (GREEN)",
      description:
        "A concentrate washing up liquid for domestic and commercial use. Ecological, mild & pleasantly fragranced. Wash-Up can be used to wash by hand glassware, dishes, crockery, ceramics, cutlery, pots, pans, kitchen utensils, etc. Also cleans glass, porcelain, aluminium, stainless steel, plastic, chrome, enamel, copper, etc.",
      highlights: [
        "Concentrated eco-friendly wash",
        "Cleans dishes and utensils",
        "Safe for all surfaces",
      ],
      features: [
        "Concentrated eco-friendly formula",
        "Mild and pleasantly fragranced",
        "Cleans a variety of kitchen items",
        "Safe for multiple surfaces",
        "Suitable for hand washing",
      ],
      applications: [
        { icon: Utensils, text: "Dishwashing" },
        { icon: UtensilsCrossed, text: "Utensil Cleaning" },
        { icon: Utensils, text: "Commercial Kitchens" },
      ],
      surfaces: [
        "Glassware",
        "Crockery",
        "Cutlery",
        "Pots and Pans",
        "Porcelain",
        "Aluminium",
        "Stainless Steel",
        "Plastic",
        "Chrome",
        "Enamel",
        "Copper",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440066",
      code: "KC10",
      name: "WASH-UP (YELLOW)",
      description:
        "A concentrate washing up liquid for domestic and commercial use. Ecological, mild & pleasantly fragranced. Wash-Up can be used to wash by hand glassware, dishes, crockery, ceramics, cutlery, pots, pans, kitchen utensils, etc. Also cleans glass, porcelain, aluminium, stainless steel, plastic, chrome, enamel, copper, etc.",
      highlights: [
        "Concentrated eco-friendly wash",
        "Cleans dishes and utensils",
        "Safe for all surfaces",
      ],
      features: [
        "Concentrated eco-friendly formula",
        "Mild and pleasantly fragranced",
        "Cleans a variety of kitchen items",
        "Safe for multiple surfaces",
        "Suitable for hand washing",
      ],
      applications: [
        { icon: Utensils, text: "Dishwashing" },
        { icon: UtensilsCrossed, text: "Utensil Cleaning" },
        { icon: Utensils, text: "Commercial Kitchens" },
      ],
      surfaces: [
        "Glassware",
        "Crockery",
        "Cutlery",
        "Pots and Pans",
        "Porcelain",
        "Aluminium",
        "Stainless Steel",
        "Plastic",
        "Chrome",
        "Enamel",
        "Copper",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440067",
      code: "KC11",
      name: "FAD (FOOD AREA DEGREASER)",
      description:
        "A bactericidal food area degreaser and cleaner. May be diluted with water to achieve clean, germ free surfaces. Removes oils, fats, grease and surface soiling. Use on water washable hard surfaces, including stainless steel, ceramic, stone, concrete, PVC, polyethylene and polypropylene. In food production/kitchen areas, leaves no residual taint - Fragrance free.",
      highlights: [
        "Bactericidal food degreaser",
        "Removes oils and grease",
        "Leaves no taint",
      ],
      features: [
        "Bactericidal cleaning formula",
        "Removes oils, fats, and grease",
        "Fragrance-free, no residual taint",
        "Dilutable with water",
        "Safe for food preparation surfaces",
      ],
      applications: [
        { icon: Utensils, text: "Food Preparation Cleaning" },
        { icon: Droplets, text: "Surface Degreasing" },
        { icon: Utensils, text: "Commercial Kitchens" },
      ],
      surfaces: [
        "Stainless Steel",
        "Ceramic",
        "Stone",
        "Concrete",
        "PVC",
        "Polyethylene",
        "Polypropylene",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440068",
      code: "KC12",
      name: "KLEEN HANDS",
      description:
        "Kleen Hands is a premium quality pearlised bacterial lather soap and an ideal product where sanitisation is of utmost importance. Kleen Hands is a cosmetic grade soap formulated to produce a rich, mild foam, which is suitable for use on all skin types. Ideal for use in washrooms, bathrooms and shower areas. Recommended for use in food processing and catering establishments, hotels, bars, pubs, restaurants and canteens, etc.",
      highlights: [
        "Premium bacterial lather soap",
        "Produces mild rich foam",
        "Ideal for sanitisation",
      ],
      features: [
        "Premium quality bacterial soap",
        "Produces rich, mild foam",
        "Suitable for all skin types",
        "Designed for high sanitisation needs",
        "Ideal for food and catering environments",
      ],
      applications: [
        { icon: Hand, text: "Sanitising Hand Washing" },
        { icon: Utensils, text: "Food Processing Areas" },
        { icon: Utensils, text: "Catering Establishments" },
      ],
      surfaces: ["Skin"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440069",
      code: "KC13",
      name: "DETERGENT SANITIZER",
      description:
        "A chlorine based sanitizing powder for the general cleaning and sterilising of tables, cutting boards, sinks and also to sanitize cutlery, crockery and utensils. A highly effective yet economical product which gives outstanding results with minimal effort.",
      highlights: [
        "Chlorine sanitizing powder",
        "Cleans tables and sinks",
        "Economical and effective",
      ],
      features: [
        "Chlorine-based sanitizing powder",
        "Cleans and sterilises surfaces",
        "Effective on tables and sinks",
        "Sanitises cutlery and crockery",
        "Economical with minimal effort",
      ],
      applications: [
        { icon: Utensils, text: "Kitchen Surface Sanitisation" },
        { icon: UtensilsCrossed, text: "Utensil Cleaning" },
        { icon: Utensils, text: "Catering Establishments" },
      ],
      surfaces: [
        "Tables",
        "Cutting Boards",
        "Sinks",
        "Cutlery",
        "Crockery",
        "Utensils",
      ],
    },
  ],
  "Paint Strippers": [
    {
      id: "550e8400-e29b-41d4-a716-446655440070",
      code: "PS1",
      name: "STRIP THICK (BRUSHABLE PAINT STRIPPER)",
      description:
        "Strip Thick is a highly effective Dichloromethane and Methanol based paint stripper, presented in gel form which clings to the surface for easy removal of paint, primer and graffiti. Simply brush on, allow it to dwell then wash the residue and removed paint away.",
      highlights: [
        "Gel based paint stripper",
        "Removes paint and graffiti",
        "Easy brush and wash",
      ],
      features: [
        "Dichloromethane and Methanol formula",
        "Gel form clings to surfaces",
        "Removes paint, primer, and graffiti",
        "Easy brush-on application",
        "Wash-off residue removal",
      ],
      applications: [
        { icon: Paintbrush, text: "Paint Removal" },
        { icon: Brush, text: "Graffiti Cleaning" },
        { icon: BrickWall, text: "Surface Restoration" },
      ],
      surfaces: ["Painted Surfaces", "Walls", "Metal Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440071",
      code: "PS2",
      name: "DIPSTRIP (PAINT, NYLON AND ACRYLIC STRIPPER)",
      description:
        "Dipstrip is a highly effective Dichloromethane and Methanol based paint stripper, which quickly and easily strips surface coating and process residues completely, with no scraping necessary, when used cold with a water seal in a polypropylene dip tank. Ideal for removing paint, resin, grease, carbon and rubber from metallic components.",
      highlights: [
        "Effective paint dip stripper",
        "Removes coatings easily",
        "No scraping needed",
      ],
      features: [
        "Dichloromethane and Methanol formula",
        "No scraping required",
        "Used in polypropylene dip tank",
        "Removes paint, resin, and grease",
        "Effective on carbon and rubber",
      ],
      applications: [
        { icon: Paintbrush, text: "Paint and Coating Removal" },
        { icon: Barrel, text: "Dip Tank Stripping" },
        { icon: Wrench, text: "Metallic Component Cleaning" },
      ],
      surfaces: ["Metallic Components", "Painted Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440072",
      code: "PS3",
      name: "STRIP THICK 'P' (PHENOLIC BRUSHABLE PAINT STRIPPER)",
      description:
        "Strip Thick 'P' is a highly viscous, Phenol activated Dichloromethane based paint stripper for the removal of paint from vertical or horizontal surfaces. Sunstrip removes the toughest surface coatings such as stove enamel and epoxy resin based paints.",
      highlights: [
        "Viscous phenolic stripper",
        "Removes tough coatings",
        "Works on all surfaces",
      ],
      features: [
        "Phenol-activated Dichloromethane formula",
        "Highly viscous for surface clinging",
        "Removes stove enamel and epoxy paints",
        "Suitable for vertical and horizontal surfaces",
        "Effective on tough coatings",
      ],
      applications: [
        { icon: Paintbrush, text: "Tough Paint Removal" },
        { icon: Brush, text: "Surface Coating Stripping" },
        { icon: BrickWall, text: "Surface Restoration" },
      ],
      surfaces: [
        "Painted Surfaces",
        "Metal Surfaces",
        "Vertical and Horizontal Surfaces",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440073",
      code: "PS4",
      name: "DIPSTRIP 'P' (PHENOLIC ACTIVATED STRIPPER)",
      description:
        "Dipstrip ‘P’ is a Phenol activated Dichloromethane based paint stripper which quickly and easily strips surface coating and process residues completely, with no scraping necessary, when used cold with a water seal in a polypropylene dip tank. Dipstrip ‘P’ removes the toughest surface coatings such as stove enamel and epoxy resin based paints.",
      highlights: [
        "Phenol activated stripper",
        "Strips coatings easily",
        "No scraping required",
      ],
      features: [
        "Phenol-activated Dichloromethane formula",
        "No scraping required",
        "Used in polypropylene dip tank",
        "Removes stove enamel and epoxy paints",
        "Effective on tough coatings",
      ],
      applications: [
        { icon: Paintbrush, text: "Tough Paint Removal" },
        { icon: Barrel, text: "Dip Tank Stripping" },
        { icon: Wrench, text: "Metallic Component Cleaning" },
      ],
      surfaces: ["Metallic Components", "Painted Surfaces"],
    },
  ],
  "Speciality Chemicals": [
    {
      id: "550e8400-e29b-41d4-a716-446655440074",
      code: "SC1",
      name: "CITURAL",
      description:
        "Citural is a highly versatile cleaner based on a synergistic blend of surfactants and solvents. On dilution with water it forms a micro emulsion product which can be used as a water-based degreaser and multi-purpose cleaner suitable for virtually any surface. Citural is a concentrated versatile product which can be diluted 1:4 with water and heated up to 65 deg C if required.",
      highlights: [
        "Versatile micro emulsion cleaner",
        "Acts as water degreaser",
        "Dilutes and heats",
      ],
      features: [
        "Synergistic surfactant and solvent blend",
        "Forms micro emulsion with water",
        "Dilutable 1:4 with water",
        "Heatable up to 65°C",
        "Versatile for all surfaces",
      ],
      applications: [
        { icon: SprayCan, text: "Multi-Purpose Cleaning" },
        { icon: Droplet, text: "Degreasing" },
        { icon: Brush, text: "Surface Maintenance" },
      ],
      surfaces: ["All Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440075",
      code: "SC2",
      name: "SAFETY GEN",
      description:
        "A safe to use non-chlorinated hydrocarbon solvent for use in ultrasonic tanks and for cold degreasing of electrical motors as well as a general purpose degreaser for metals, plastics and printed surfaces including chlorinated rubber finishes. Safety Gen has been specially formulated for use where the use of traditional chlorinated hydrocarbon solvents is restricted for toxicity or operational reasons. Safety Gen can also be used as a replacement for 1.1.1 Trichloroethylene in general cleaning where large components are involved and solvent vapours are undesirable.",
      highlights: [
        "Safe non-chlorinated solvent",
        "Degreases motors and metals",
        "Replaces toxic cleaners",
      ],
      features: [
        "Non-chlorinated hydrocarbon solvent",
        "Safe for ultrasonic tanks",
        "Degreases metals and plastics",
        "Replaces toxic solvents",
        "Low vapour emission",
      ],
      applications: [
        { icon: Cog, text: "Electrical Motor Cleaning" },
        { icon: Wrench, text: "Industrial Degreasing" },
        { icon: Barrel, text: "Ultrasonic Cleaning" },
      ],
      surfaces: [
        "Metals",
        "Plastics",
        "Printed Surfaces",
        "Chlorinated Rubber Finishes",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440076",
      code: "SC3",
      name: "SURE WELD",
      description:
        "Sure Weld is an advanced welding anti-spatter product that is oil free and contains no chlorinated solvents. Sure Weld is a low hazard liquid formulation based on aqueous film forming agents, corrosion inhibitors and bactericide.",
      highlights: [
        "Oil free anti-spatter",
        "Low hazard liquid",
        "Prevents welding spatter",
      ],
      features: [
        "Oil-free and non-chlorinated formula",
        "Contains corrosion inhibitors",
        "Includes bactericide",
        "Prevents welding spatter",
        "Low hazard liquid formulation",
      ],
      applications: [
        { icon: Sparkles, text: "Welding Operations" },
        { icon: Shield, text: "Surface Protection" },
        { icon: Factory, text: "Industrial Welding" },
      ],
      surfaces: ["Metal Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440077",
      code: "SC3",
      name: "DE-RUST",
      description:
        "A viscous phosphoric acid based formulation which provides a quick de-rusting action. De-Rust removes rust, grease, dirt, oxide films and scale from most metal surfaces.",
      highlights: [
        "Viscous acid de-ruster",
        "Removes rust and grease",
        "Cleans metal surfaces",
      ],
      features: [
        "Phosphoric acid-based formula",
        "Viscous for surface clinging",
        "Quickly removes rust and scale",
        "Cleans grease and dirt",
        "Effective on most metal surfaces",
      ],
      applications: [
        { icon: Wrench, text: "Metal Restoration" },
        { icon: AlertTriangle, text: "Rust Removal" },
        { icon: Brush, text: "Surface Cleaning" },
      ],
      surfaces: ["Metal Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440078",
      code: "SC4",
      name: "ALGAECIDE",
      description:
        "Algaecide is a quaternary based product which will kill algae, moss, and mildew safely and effectively. It aids the removal of undesirable growth from masonry and hard surfaces. It can also be used as a high active bactericidal cleaner.",
      highlights: [
        "Quaternary algae killer",
        "Removes moss safely",
        "Acts as bactericide",
      ],
      features: [
        "Quaternary-based formula",
        "Kills algae, moss, and mildew",
        "High active bactericidal cleaner",
        "Safe for masonry surfaces",
        "Removes undesirable growth",
      ],
      applications: [
        { icon: Leaf, text: "Algae and Moss Removal" },
        { icon: Building, text: "Masonry Maintenance" },
        { icon: Shield, text: "Bactericidal Cleaning" },
      ],
      surfaces: ["Masonry", "Hard Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440079",
      code: "SC5",
      name: "FLOCCULANT",
      description:
        "A polyelectrolyte with optimum electric charge to flocculate most particles which normally exist in a deflocculated state of water.",
      highlights: [
        "Polyelectrolyte water flocculant",
        "Optimises particle charge",
        "Clarifies deflocculated water",
      ],
      features: [
        "Polyelectrolyte-based formula",
        "Optimises particle flocculation",
        "Clarifies water effectively",
        "Targets deflocculated particles",
        "Suitable for water treatment",
      ],
      applications: [
        { icon: Droplet, text: "Water Treatment" },
        { icon: Filter, text: "Particle Flocculation" },
        { icon: Factory, text: "Industrial Water Processing" },
      ],
      surfaces: ["Water"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440080",
      code: "SC6",
      name: "DEFOAMER",
      description:
        "A concentrated specialised de-foaming agent which can be added to liquid recovery tanks on cleaning machines. Defoamer controls detergent foam from the product being used and counteracts foam from any previous detergent residues on the surface. Suitable for eliminating foaming problems in recovery tanks of carpet extraction/spray extraction machines and scrubber driers, allowing tanks to be used to their full capacity, as well as other applications where the build-up of foam is undesirable.",
      highlights: [
        "Concentrated foam reducer",
        "Controls tank foaming",
        "Enhances machine use",
      ],
      features: [
        "Concentrated de-foaming agent",
        "Controls detergent foam",
        "Counteracts residual foam",
        "Suitable for carpet extraction machines",
        "Maximises recovery tank capacity",
      ],
      applications: [
        { icon: SprayCan, text: "Carpet Extraction" },
        { icon: WashingMachine, text: "Scrubber Drier Maintenance" },
        { icon: Bubbles, text: "Foam Control" },
      ],
      surfaces: [
        "Recovery Tanks",
        "Carpet Extraction Machines",
        "Scrubber Driers",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440081",
      code: "SC7",
      name: "OILGO",
      description:
        "This is a versatile product which can be used for the treatment and dispersal of large oil spillages. An essential product for oil companies, tank storage farms, fire brigades, industrial oil and solvent users, docks and harbour authorities.",
      highlights: [
        "Versatile oil spill treatment",
        "Essential for oil companies",
        "Disperses large spillages",
      ],
      features: [
        "Versatile oil spill dispersant",
        "Effective for large spillages",
        "Suitable for industrial use",
        "Essential for emergency response",
        "Used by oil and dock authorities",
      ],
      applications: [
        { icon: Droplet, text: "Oil Spill Treatment" },
        { icon: Factory, text: "Industrial Oil Management" },
        { icon: Flame, text: "Emergency Response" },
      ],
      surfaces: ["Oil Spill Areas", "Industrial Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440082",
      code: "SC8",
      name: "MASK",
      description:
        "Highly perfumed re-odouriser for use in sewerage plants, farms and malodourous areas. Mask kills odour producing bacteria and fungi, neutralising unpleasant odours. Recommended for use in washroom areas, floors, toilets, urinals, drains and cisterns. Also highly effective on waste and rubbish bins, rubbish carts, waste disposal chutes, carpets and entrance matting. It can be used on fabrics, curtains etc.",
      highlights: [
        "Perfumed odour neutraliser",
        "Kills bacteria and fungi",
        "Cleans washroom areas",
      ],
      features: [
        "Highly perfumed formula",
        "Neutralises unpleasant odours",
        "Kills odour-causing bacteria and fungi",
        "Effective in washroom areas",
        "Suitable for fabrics and waste bins",
      ],
      applications: [
        { icon: Toilet, text: "Washroom Odour Control" },
        { icon: Trash, text: "Waste Bin Deodorising" },
        { icon: Sprout, text: "Agricultural Odour Management" },
      ],
      surfaces: [
        "Toilets",
        "Urinals",
        "Drains",
        "Cisterns",
        "Rubbish Bins",
        "Carpets",
        "Entrance Matting",
        "Fabrics",
        "Curtains",
      ],
    },
  ],
  "Toilet and Washroom": [
    {
      id: "550e8400-e29b-41d4-a716-446655440083",
      code: "TW1",
      name: "SCALLETE",
      description:
        "Scallete is a viscous blend of acids and surfactants formulated with a pleasant fragrance. Scallete clings to vertical surfaces for enhanced dwell times and better cleaning. The ideal product for the removal of limescale and uric acid from toilet bowls, urinals and toilet areas.",
      highlights: [
        "Viscous acid limescale remover",
        "Clings to vertical surfaces",
        "Cleans toilet bowls",
      ],
      features: [
        "Viscous acid and surfactant blend",
        "Clings to vertical surfaces",
        "Removes limescale and uric acid",
        "Pleasantly fragranced",
        "Enhanced dwell time for cleaning",
      ],
      applications: [
        { icon: Toilet, text: "Toilet Bowl Cleaning" },
        { icon: Bath, text: "Urinal Maintenance" },
        { icon: Brush, text: "Washroom Sanitation" },
      ],
      surfaces: ["Toilet Bowls", "Urinals", "Toilet Area Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440084",
      code: "TW2",
      name: "PRESTIGE",
      description:
        "Prestige is a premium quality pearlised hand and body soap which can be used in any situation where cleaning and sanitising are of the utmost importance. Prestige is a cosmetic-grade soap formulated using the highest quality ingredients to produce a rich, mild foam, which is suitable for use on all skin types. Ideal for use in washrooms, bathrooms and shower areas. Recommended for use in offices, health clubs, hotels, nursing and residential homes.",
      highlights: [
        "Premium pearlised hand soap",
        "Produces mild rich foam",
        "Suitable for all skin",
      ],
      features: [
        "Premium quality pearlised soap",
        "Produces rich, mild foam",
        "Suitable for all skin types",
        "Ideal for sanitising environments",
        "Perfect for washrooms and showers",
      ],
      applications: [
        { icon: Hand, text: "Hand and Body Washing" },
        { icon: Building, text: "Offices and Hotels" },
        { icon: Hospital, text: "Nursing Homes and Health Clubs" },
      ],
      surfaces: ["Skin"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440085",
      code: "TW3",
      name: "LEMON DISINFECTANT",
      description:
        "A QAP30 triple action lemon fragranced disinfectant for general purpose disinfecting and for spray application for odour control. Cleans disinfects and deodorises in one action. Regular application protects surfaces from mould, bacteria and mildew.",
      highlights: [
        "Lemon fragranced disinfectant",
        "Cleans and deodorises",
        "Protects from mould",
      ],
      features: [
        "QAP30 triple action formula",
        "Lemon fragrance for odour control",
        "Cleans, disinfects, and deodorises",
        "Protects against mould and bacteria",
        "Suitable for spray application",
      ],
      applications: [
        { icon: Toilet, text: "Washroom Disinfection" },
        { icon: SprayCan, text: "Odour Control" },
        { icon: Shield, text: "Surface Protection" },
      ],
      surfaces: ["Hard Surfaces", "Washroom Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440086",
      code: "TW4",
      name: "PINE DISINFECTANT",
      description:
        "A QAP30 triple action pine fragranced disinfectant for general purpose disinfecting and for spray application for odour control. Cleans disinfects and deodorises in one action. Regular application protects surfaces from mould, bacteria and mildew.",
      highlights: [
        "Pine fragranced disinfectant",
        "Cleans and deodorises",
        "Protects from mould",
      ],
      features: [
        "QAP30 triple action formula",
        "Pine fragrance for odour control",
        "Cleans, disinfects, and deodorises",
        "Protects against mould and bacteria",
        "Suitable for spray application",
      ],
      applications: [
        { icon: Toilet, text: "Washroom Disinfection" },
        { icon: SprayCan, text: "Odour Control" },
        { icon: Shield, text: "Surface Protection" },
      ],
      surfaces: ["Hard Surfaces", "Washroom Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440087",
      code: "TW5",
      name: "ANTISEPTIC DISINFECTANT",
      description:
        "Antiseptic disinfectant concentrate: (RW 3/5) containing 1.2% Chloroxylenols. Designed for regular use on all hard surfaces to maintain clean and hygienic conditions. This product can be used safely on any water washable surface. Ideal to disinfect and deodorise washroom areas, toilets, urinals, floors, drains, rubbish bins, waste disposal chutes, carpets, entrance matting, sunbeds, sports equipment, etc.",
      highlights: [
        "Antiseptic surface disinfectant",
        "Cleans and deodorises areas",
        "Safe for water surfaces",
      ],
      features: [
        "Contains 1.2% Chloroxylenols",
        "Antiseptic disinfectant concentrate",
        "Safe for water-washable surfaces",
        "Deodorises and disinfects",
        "Suitable for regular use",
      ],
      applications: [
        { icon: Toilet, text: "Washroom Disinfection" },
        { icon: Trash, text: "Waste Bin Cleaning" },
        { icon: Brush, text: "Hygienic Surface Maintenance" },
      ],
      surfaces: [
        "Toilets",
        "Urinals",
        "Floors",
        "Drains",
        "Rubbish Bins",
        "Carpets",
        "Entrance Matting",
        "Sunbeds",
        "Sports Equipment",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440088",
      code: "TW6",
      name: "FINESSE",
      description:
        "This versatile cleaner and freshener is a pleasantly fragranced product, ideal for virtually any surface. A pH neutral cleaner which cleans and de-odourises in one action. Finesse is an ideal product for swimming pools, shower rooms, changing rooms, baths, saunas etc. An excellent degreaser for hard surfaces which leaves behind a long lingering fragrance.",
      highlights: [
        "Versatile pH neutral cleaner",
        "Deodorises and degreases",
        "Leaves lingering fragrance",
      ],
      features: [
        "pH neutral cleaning formula",
        "Cleans and deodorises in one action",
        "Pleasantly fragranced",
        "Effective degreaser for hard surfaces",
        "Ideal for wet environments",
      ],
      applications: [
        { icon: ShowerHead, text: "Shower Room Cleaning" },
        { icon: Droplet, text: "Swimming Pool Maintenance" },
        { icon: Brush, text: "Surface Deodorising" },
      ],
      surfaces: [
        "Hard Surfaces",
        "Shower Rooms",
        "Swimming Pool Areas",
        "Saunas",
        "Baths",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440089",
      code: "TW7",
      name: "MULTI CLEAN",
      description:
        "A truly versatile hard surface cleaner which can be used on any surface. Its cleaning properties are boosted by a built-in aqueous co-solvent for excellent grease cutting ability. Multi Clean can be diluted 1:40 with water.",
      highlights: [
        "Versatile surface cleaner",
        "Cuts grease effectively",
        "Dilutes one to forty",
      ],
      features: [
        "Versatile hard surface cleaner",
        "Contains aqueous co-solvent",
        "Excellent grease cutting ability",
        "Dilutable 1:40 with water",
        "Suitable for all surfaces",
      ],
      applications: [
        { icon: Brush, text: "Surface Cleaning" },
        { icon: SprayCan, text: "Grease Removal" },
        { icon: Toilet, text: "Washroom Maintenance" },
      ],
      surfaces: ["All Hard Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440090",
      code: "TW8",
      name: "CRYSTAL CLEAR GLASS CLEANER",
      description:
        "A ready-to-use, multi-purpose alcohol based glass and plastic cleaner for use through a trigger spray, which cuts through grease and dirt to leave a streak and smear-free, sparkling finish. Free from ammonia and abrasives, Crystal Clear is excellent for windows, double glazing, mirrors, glass, display units, glass shelves, ceramic tiles, laminates, stainless steel, aluminium and all hard surfaces. Ideal for use in hotels, offices, shops, stores, airports, public buildings and rooms, leisure centres and nursing homes.",
      highlights: [
        "Alcohol based glass cleaner",
        "Removes grease streak-free",
        "Safe for all surfaces",
      ],
      features: [
        "Ready-to-use alcohol-based formula",
        "Cuts through grease and dirt",
        "Streak and smear-free finish",
        "Ammonia and abrasive-free",
        "Trigger spray for easy application",
        "Safe for multiple hard surfaces",
      ],
      applications: [
        { icon: Building, text: "Offices and Public Buildings" },
        { icon: Hotel, text: "Hotels and Leisure Centres" },
        { icon: ShoppingCart, text: "Shops and Stores" },
        { icon: Shield, text: "Airports and Transportation" },
      ],
      surfaces: [
        "Windows",
        "Double Glazing",
        "Mirrors",
        "Glass Shelves",
        "Display Units",
        "Ceramic Tiles",
        "Stainless Steel",
        "Aluminium",
        "Laminates",
        "Hard Surfaces",
      ],
    },
  ],
  "Floor Chemicals": [
    {
      id: "550e8400-e29b-41d4-a716-446655440091",
      code: "FC1",
      name: "PRIDE",
      description:
        "Pride is a high quality metallised floor polish giving maximum durability and a consistently brilliant sheen, used to impart an instant shine for plastic, vinyl, terrazo, linoleum, rubber and sealed wooden floors. One litre of product will cover fifty square metres.",
      highlights: [
        "Metallised floor polish",
        "Imparts instant shine",
        "Covers fifty metres",
      ],
      features: [
        "High quality metallised polish",
        "Provides durable brilliant sheen",
        "Instant shine application",
        "Covers 50 square metres per litre",
        "Suitable for multiple floor types",
      ],
      applications: [
        { icon: Layers, text: "Floor Polishing" },
        { icon: Building, text: "Commercial Flooring" },
        { icon: Sparkles, text: "Instant Shine Application" },
      ],
      surfaces: [
        "Plastic Floors",
        "Vinyl Floors",
        "Terrazzo Floors",
        "Linoleum Floors",
        "Rubber Floors",
        "Sealed Wooden Floors",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440092",
      code: "FC2",
      name: "CARE",
      description:
        "Care is a product for the cleaning and conditioning of most kinds of floors. Care is a pleasantly perfumed buffable floor cleaner and maintainer. Used to replenish and revitalise floors with metallised floor polishes. When used with polishing machines a highly polished low slip surfaced is produced.",
      highlights: [
        "Cleans and conditions floors",
        "Perfumed buffable maintainer",
        "Produces low slip shine",
      ],
      features: [
        "Cleans and conditions floors",
        "Pleasantly perfumed formula",
        "Buffable for high polish",
        "Low slip surface finish",
        "Revitalises metallised polishes",
      ],
      applications: [
        { icon: Layers, text: "Floor Cleaning" },
        { icon: Brush, text: "Floor Polishing" },
        { icon: Building, text: "Commercial Floor Maintenance" },
      ],
      surfaces: ["Most Floor Types", "Metallised Polished Floors"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440093",
      code: "FC3",
      name: "STRIP",
      description:
        "Strip is a quick acting detergent with ammonia which will remove metallised, non-metallised and synthetic wax / copolymer based polishes quickly and efficiently. May be used via manual application or through a scrubber drier.",
      highlights: [
        "Quick ammonia detergent",
        "Removes wax polishes",
        "Works with scrubber",
      ],
      features: [
        "Ammonia-based detergent",
        "Quickly removes various polishes",
        "Effective on metallised and wax polishes",
        "Suitable for manual or machine application",
        "Efficient polish removal",
      ],
      applications: [
        { icon: Layers, text: "Polish Removal" },
        { icon: WashingMachine, text: "Scrubber Drier Use" },
        { icon: Brush, text: "Manual Floor Cleaning" },
      ],
      surfaces: [
        "Metallised Floors",
        "Non-metallised Floors",
        "Wax-coated Floors",
        "Copolymer-based Floors",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440094",
      code: "FC4",
      name: "HYDRO",
      description:
        "Hydro is a highly effective, solvent free, bactericidal hard surface cleaner formulated for use via manual application (sponge, mop, brush or low pressure spray). Ideal for removing grease and grime. Hydro can be diluted 1:100 with water.",
      highlights: [
        "Solvent free surface cleaner",
        "Removes grease effectively",
        "Dilutes one to hundred",
      ],
      features: [
        "Solvent-free bactericidal formula",
        "Effective grease and grime removal",
        "Dilutable 1:100 with water",
        "Suitable for manual application",
        "Versatile application methods",
      ],
      applications: [
        { icon: Brush, text: "Manual Floor Cleaning" },
        { icon: SprayCan, text: "Low Pressure Spray Cleaning" },
        { icon: Brush, text: "Grease Removal" },
      ],
      surfaces: ["Hard Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440095",
      code: "FC5",
      name: "HYDRO L/F",
      description:
        "Hydro L/F is a highly effective, solvent free, bactericidal low foaming cleaner formulated for use in commercial scrubber drier machines. May also be used on hard surfaces via manual application. Ideal for removing grease and grime. Can be diluted 1:100 with water.",
      highlights: [
        "Low foaming surface cleaner",
        "Works with scrubber machines",
        "Dilutes one to hundred",
      ],
      features: [
        "Solvent-free bactericidal formula",
        "Low foaming for scrubber driers",
        "Effective grease and grime removal",
        "Dilutable 1:100 with water",
        "Suitable for manual and machine use",
      ],
      applications: [
        { icon: WashingMachine, text: "Scrubber Drier Cleaning" },
        { icon: Brush, text: "Manual Floor Cleaning" },
        { icon: Brush, text: "Grease Removal" },
      ],
      surfaces: ["Hard Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440096",
      code: "FC6",
      name: "MULTI CLEAN",
      description:
        "A truly versatile hard surface cleaner which can be used on any surface. Its cleaning properties are boosted by a built-in aqueous co-solvent for excellent grease cutting ability. Multi Clean can be diluted 1:40 with water.",
      highlights: [
        "Versatile surface cleaner",
        "Cuts grease effectively",
        "Dilutes one to forty",
      ],
      features: [
        "Versatile hard surface cleaner",
        "Contains aqueous co-solvent",
        "Excellent grease cutting ability",
        "Dilutable 1:40 with water",
        "Suitable for all surfaces",
      ],
      applications: [
        { icon: Brush, text: "Surface Cleaning" },
        { icon: SprayCan, text: "Grease Removal" },
        { icon: Layers, text: "General Floor Maintenance" },
      ],
      surfaces: ["All Hard Surfaces"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440097",
      code: "FC7",
      name: "CARPET SHAMPOO",
      description:
        "A carpet and upholstery shampoo for use on water washable colourfast carpets and fabrics, through spray extraction machines which removes a wide range of soiling and revitalises the pile and look of fabrics, carpets and upholstery materials. It will destroy odour arising from body fluids, moulds, mites and general soiling.",
      highlights: [
        "Shampoo for carpets upholstery",
        "Removes wide range soiling",
        "Destroys body fluid odors",
      ],
      features: [
        "Designed for spray extraction machines",
        "Removes wide range of soiling",
        "Revitalises carpet and upholstery pile",
        "Destroys odours from body fluids",
        "Safe for colourfast fabrics",
      ],
      applications: [
        { icon: SquareDashed, text: "Carpet Cleaning" },
        { icon: Sofa, text: "Upholstery Maintenance" },
        { icon: SprayCan, text: "Spray Extraction Cleaning" },
      ],
      surfaces: ["Carpets", "Upholstery", "Water Washable Fabrics"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440098",
      code: "FC8",
      name: "UPHOLSTERY SHAMPOO",
      description:
        "A high foaming upholstery and carpet cleaner for manual use. Excellent for deep cleaning of the pile, as well as spot cleaning. Simply apply and agitate to create a foam which lifts the dirt away, then upon drying the dry foam can be vacuumed to leave a clean surface with no sticky residues.",
      highlights: [
        "High foaming carpet cleaner",
        "Deep cleans and spots",
        "Leaves no residue",
      ],
      features: [
        "High foaming manual cleaner",
        "Effective for deep and spot cleaning",
        "Lifts dirt with foam",
        "No sticky residues after vacuuming",
        "Suitable for carpets and upholstery",
      ],
      applications: [
        { icon: SquareDashed, text: "Carpet Cleaning" },
        { icon: Sofa, text: "Upholstery Spot Cleaning" },
        { icon: Wind, text: "Manual Foam Cleaning" },
      ],
      surfaces: ["Carpets", "Upholstery"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440099",
      code: "FC9",
      name: "PINE FLOOR GEL",
      description:
        "Ideal for cleaning wood, terrazo and concrete floors. Our superior pine floor gel exclusively uses pine oil of the very highest quality available which significantly enhances the cleaning power as well as imparting a clean and natural residual smell. Can be diluted 1:50 with water.",
      highlights: [
        "Pine gel floor cleaner",
        "Enhances cleaning power",
        "Dilutes one to fifty",
      ],
      features: [
        "High-quality pine oil formula",
        "Enhances cleaning power",
        "Leaves natural pine scent",
        "Dilutable 1:50 with water",
        "Suitable for specific floor types",
      ],
      applications: [
        { icon: Layers, text: "Floor Cleaning" },
        { icon: Brush, text: "Manual Floor Application" },
        { icon: Sprout, text: "Scented Floor Maintenance" },
      ],
      surfaces: ["Wood Floors", "Terrazzo Floors", "Concrete Floors"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440100",
      code: "FC10",
      name: "LEMON FLOOR GEL",
      description:
        "Ideal for cleaning wood, terrazo and concrete floors. Our superior lemon floor gel exclusively uses citrus oil of the very highest quality available which significantly enhances the cleaning power as well as imparting a clean and natural residual smell. Can be diluted 1:50 with water.",
      highlights: [
        "Lemon gel floor cleaner",
        "Boosts cleaning efficiency",
        "Dilutes one to fifty",
      ],
      features: [
        "High-quality citrus oil formula",
        "Enhances cleaning power",
        "Leaves natural lemon scent",
        "Dilutable 1:50 with water",
        "Suitable for specific floor types",
      ],
      applications: [
        { icon: Layers, text: "Floor Cleaning" },
        { icon: Brush, text: "Manual Floor Application" },
        { icon: Citrus, text: "Scented Floor Maintenance" },
      ],
      surfaces: ["Wood Floors", "Terrazzo Floors", "Concrete Floors"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440101",
      code: "FC11",
      name: "ODOUR BAN",
      description:
        "Odour Ban is used for the control and eradication of odours from carpet, wall coverings, upholstery, floors, refuse containers etc. Safe on most fabrics, carpets and other hard surfaces which are unaffected by water. Odour Ban neutralises odours and imparts a pleasant fragrance.",
      highlights: [
        "Controls carpet odors",
        "Safe for most fabrics",
        "Neutralises with fragrance",
      ],
      features: [
        "Neutralises odours effectively",
        "Imparts pleasant fragrance",
        "Safe for water-unaffected surfaces",
        "Controls odours in various areas",
        "Suitable for fabrics and hard surfaces",
      ],
      applications: [
        { icon: SquareDashed, text: "Carpet Odour Control" },
        { icon: Sofa, text: "Upholstery Deodorising" },
        { icon: Trash, text: "Refuse Container Odour Management" },
      ],
      surfaces: [
        "Carpets",
        "Wall Coverings",
        "Upholstery",
        "Floors",
        "Refuse Containers",
      ],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440102",
      code: "FC12",
      name: "LAMINATE FLOOR CLEANER",
      description:
        "Laminate floor cleaner has been specially developed to clean laminate floors. Its special formulation leaves no residues. Pleasantly fragranced, economical and an easy to use product.",
      highlights: [
        "Special laminate floor cleaner",
        "Leaves no residues",
        "Easy and economical",
      ],
      features: [
        "Specially formulated for laminate floors",
        "Leaves no residues",
        "Pleasantly fragranced",
        "Economical and easy to use",
        "Effective cleaning without streaks",
      ],
      applications: [
        { icon: Layers, text: "Laminate Floor Cleaning" },
        { icon: Brush, text: "Manual Floor Application" },
        { icon: Building, text: "Residential and Commercial Floors" },
      ],
      surfaces: ["Laminate Floors"],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440103",
      code: "FC13",
      name: "DEFOAMER",
      description:
        "A concentrated specialised de-foaming agent which can be added to liquid recovery tanks on cleaning machines. Defoamer controls detergent foam from the product being used and counteracts foam from any previous detergent residues on the surface. Suitable for eliminating foaming problems in recovery tanks of carpet extraction/spray extraction machines and scrubber driers, allowing tanks to be used to their full capacity, as well as other applications where the build-up of foam is undesirable.",
      highlights: [
        "Concentrated foam control agent",
        "Eliminates tank foaming",
        "Enhances machine capacity",
      ],
      features: [
        "Concentrated de-foaming agent",
        "Controls detergent foam",
        "Counteracts residual foam",
        "Suitable for carpet extraction machines",
        "Maximises recovery tank capacity",
      ],
      applications: [
        { icon: SquareDashed, text: "Carpet Extraction" },
        { icon: WashingMachine, text: "Scrubber Drier Maintenance" },
        { icon: Bubbles, text: "Foam Control" },
      ],
      surfaces: [
        "Recovery Tanks",
        "Carpet Extraction Machines",
        "Scrubber Driers",
      ],
    },
  ],
};

// icons.js
export const icons = {
  "Building Chemicals": new URL(
    "../assets/chemicals-icon/building.png",
    import.meta.url
  ).href,
  "Drain Chemicals": new URL(
    "../assets/chemicals-icon/Drain.png",
    import.meta.url
  ).href,
  "Floor Chemicals": new URL(
    "../assets/chemicals-icon/floor.png",
    import.meta.url
  ).href,
  "Food Processing": new URL(
    "../assets/chemicals-icon/food.png",
    import.meta.url
  ).href,
  "Hand Cleaners": new URL("../assets/chemicals-icon/hand.png", import.meta.url)
    .href,
  "Automotive Chemicals": new URL(
    "../assets/chemicals-icon/car.png",
    import.meta.url
  ).href,
  "Kitchen & Catering Chemicals": new URL(
    "../assets/chemicals-icon/kitchen.png",
    import.meta.url
  ).href,
  "Paint Strippers": new URL(
    "../assets/chemicals-icon/paint.png",
    import.meta.url
  ).href,
  "Speciality Chemicals": new URL(
    "../assets/chemicals-icon/speciality.png",
    import.meta.url
  ).href,
  "Toilet and Washroom": new URL(
    "../assets/chemicals-icon/bath.png",
    import.meta.url
  ).href,
};

export const bottleImages = {
  "Building Chemicals": new URL(
    "../assets/bottles/buildingBottle.png",
    import.meta.url
  ).href,
  "Drain Chemicals": new URL(
    "../assets/bottles/bottleDrainage.png",
    import.meta.url
  ).href,
  "Floor Chemicals": new URL(
    "../assets/bottles/floorbottle.png",
    import.meta.url
  ).href,
  "Food Processing": new URL(
    "../assets/bottles/bottleFood.png",
    import.meta.url
  ).href,
  "Hand Cleaners": new URL("../assets/bottles/bottleHand.png", import.meta.url)
    .href,
  "Automotive Chemicals": new URL(
    "../assets/bottles/bottleAutomotive.png",
    import.meta.url
  ).href,
  "Kitchen & Catering Chemicals": new URL(
    "../assets/bottles/bottleKitchen.jpg",
    import.meta.url
  ).href,
  "Paint Strippers": new URL(
    "../assets/bottles/bottlePaint.png",
    import.meta.url
  ).href,
  "Speciality Chemicals": new URL(
    "../assets/bottles/bottleSpeciality.png",
    import.meta.url
  ).href,
  "Toilet and Washroom": new URL(
    "../assets/bottles/bottleWashroom.png",
    import.meta.url
  ).href,
};
