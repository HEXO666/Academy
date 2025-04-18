import { Section } from "lucide-react"
import Image from "next/image"

const members = [
  {
    id: 1,
    name: "Mohammed Alaoui",
    role: "Président",
    bio: "Chef renommé et historien de la gastronomie marocaine, Mohammed Alaoui a consacré sa carrière à la préservation des traditions culinaires du Maroc.",
    image: "/placeholder.svg?height=300&width=300&query=professional moroccan male chef portrait",
  },
  {
    id: 2,
    name: "Fatima Bennani",
    role: "Vice-Présidente",
    bio: "Auteure de plusieurs livres sur la cuisine marocaine, Fatima Bennani est spécialiste des influences andalouses dans notre gastronomie.",
    image: "/placeholder.svg?height=300&width=300&query=professional moroccan female chef portrait",
  },
  {
    id: 3,
    name: "Karim Tahiri",
    role: "Secrétaire Général",
    bio: "Ancien restaurateur et critique culinaire, Karim Tahiri œuvre pour la promotion internationale de la gastronomie marocaine.",
    image: "/placeholder.svg?height=300&width=300&query=professional moroccan male food critic portrait",
  },
  {
    id: 4,
    name: "Amina Lahrichi",
    role: "Trésorière",
    bio: "Experte en gestion d'événements gastronomiques, Amina Lahrichi coordonne les dîners et manifestations de l'Académie.",
    image: "/placeholder.svg?height=300&width=300&query=professional moroccan female event organizer portrait",
  },
  {
    id: 5,
    name: "Youssef Benjelloun",
    role: "Membre du Conseil",
    bio: "Chef étoilé, Youssef Benjelloun est reconnu pour son approche innovante de la cuisine marocaine traditionnelle.",
    image: "/placeholder.svg?height=300&width=300&query=professional moroccan male chef in restaurant portrait",
  },
  {
    id: 6,
    name: "Nadia Chaoui",
    role: "Membre du Conseil",
    bio: "Historienne spécialisée dans les traditions culinaires berbères, Nadia Chaoui documente les recettes ancestrales des différentes régions du Maroc.",
    image: "/placeholder.svg?height=300&width=300&query=professional moroccan female historian portrait",
  },
  {
    id: 7,
    name: "Hassan Meziane",
    role: "Membre du Conseil",
    bio: "Producteur d'huile d'argan et défenseur des produits du terroir marocain, Hassan Meziane travaille à la valorisation des ingrédients locaux.",
    image: "/placeholder.svg?height=300&width=300&query=professional moroccan male farmer portrait",
  },
  {
    id: 8,
    name: "Leila Boutaleb",
    role: "Membre du Conseil",
    bio: "Professeure de cuisine et auteure, Leila Boutaleb se consacre à la transmission des techniques culinaires traditionnelles aux jeunes générations.",
    image: "/placeholder.svg?height=300&width=300&query=professional moroccan female cooking teacher portrait",
  },
]

export default function NosMembresPage() {
  return (
<section className="relative h-[40vh] min-h-[300px] w-full">
<div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
           <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Membres</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Pas Encore Terminer
          </p>
       </div>
         </div>
</section>
//     <div className="pt-20">
//       {/* Hero Section */}
//       <section className="relative h-[40vh] min-h-[300px] w-full">
//         <Image
//           src="/placeholder.svg?height=500&width=1920&query=moroccan gastronomy academy members group photo"
//           alt="Nos Membres"
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//           <div className="text-center text-white">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Membres</h1>
//             <p className="text-xl max-w-2xl mx-auto">
//               Découvrez les personnalités qui composent l'Académie Marocaine de Gastronomie
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Introduction */}
//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Le Conseil d'Administration</h2>
//             <p className="text-lg mb-4">
//               L'Académie Marocaine de Gastronomie est dirigée par un conseil d'administration composé de personnalités
//               reconnues dans le domaine de la gastronomie, de la culture et des arts culinaires.
//             </p>
//             <p>
//               Nos membres apportent leur expertise et leur passion pour faire rayonner la gastronomie marocaine et
//               préserver notre patrimoine culinaire.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Members Grid */}
//       <section className="py-12 bg-[var(--secondary)]">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {members.map((member) => (
//               <div
//                 key={member.id}
//                 className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="relative h-64">
//                   <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-1">{member.name}</h3>
//                   <p className="text-[var(--primary)] font-medium mb-3">{member.role}</p>
//                   <p className="text-gray-600">{member.bio}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Honorary Members */}
//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Membres Honoraires</h2>
//             <p className="text-lg">
//               L'Académie compte également des membres honoraires, personnalités qui ont contribué de manière
//               significative à la promotion et à la préservation de la gastronomie marocaine.
//             </p>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <div className="bg-[var(--secondary)] p-8 rounded-lg">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="flex items-center space-x-4">
//                   <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
//                     <Image
//                       src="/placeholder.svg?height=100&width=100&query=elderly moroccan male chef portrait"
//                       alt="Ahmed Charai"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="font-bold">Ahmed Charai</h3>
//                     <p className="text-sm text-gray-600">Chef pionnier de la cuisine marocaine moderne</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
//                     <Image
//                       src="/placeholder.svg?height=100&width=100&query=elderly moroccan female chef portrait"
//                       alt="Khadija Bennis"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="font-bold">Khadija Bennis</h3>
//                     <p className="text-sm text-gray-600">Auteure de référence sur la cuisine traditionnelle</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
//                     <Image
//                       src="/placeholder.svg?height=100&width=100&query=elderly moroccan male food historian portrait"
//                       alt="Omar Benjelloun"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="font-bold">Omar Benjelloun</h3>
//                     <p className="text-sm text-gray-600">Historien de la gastronomie marocaine</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
//                     <Image
//                       src="/placeholder.svg?height=100&width=100&query=elderly moroccan female culinary expert portrait"
//                       alt="Malika Ftouh"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="font-bold">Malika Ftouh</h3>
//                     <p className="text-sm text-gray-600">Experte en pâtisserie traditionnelle marocaine</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
    //  </div>
   )
}
