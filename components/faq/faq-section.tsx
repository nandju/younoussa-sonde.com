"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    id: "item-1",
    number: "01",
    question: "Comment fonctionne notre plateforme ?",
    answer:
      "Notre plateforme met en relation acheteurs et vendeurs grâce à des outils de recherche conviviaux, des annonces immobilières détaillées et des fonctionnalités avancées adaptées au marché ivoirien.",
  },
  {
    id: "item-2",
    number: "02",
    question: "L'utilisation de votre plateforme est-elle gratuite ?",
    answer:
      "Oui, les fonctionnalités de base de notre plateforme sont entièrement gratuites. Nous proposons des services premium et des fonctionnalités avancées pour les utilisateurs qui ont besoin d'un accompagnement personnalisé.",
  },
  {
    id: "item-3",
    number: "03",
    question: "Comment puis-je trouver un bien à acheter ou vendre ?",
    answer:
      "Utilisez nos filtres de recherche avancés pour trouver des propriétés par localisation (Abidjan, Yamoussoukro, Bouaké...), gamme de prix, type de bien et caractéristiques spécifiques. Notre interface intuitive facilite la navigation et la comparaison des annonces.",
  },
  {
    id: "item-4",
    number: "04",
    question: "Quelles informations sont incluses dans les annonces ?",
    answer:
      "Chaque annonce comprend des informations détaillées : prix, localisation, spécifications du bien, photos haute qualité, visites virtuelles, informations sur le quartier, et coordonnées de l'agent immobilier référent.",
  },
  {
    id: "item-5",
    number: "05",
    question: "Comment puis-je trouver une propriété en location ?",
    answer:
      "Utilisez notre fonction de recherche de location pour filtrer les biens par loyer mensuel, durée de bail, politique animaux et équipements. Vous pouvez également configurer des alertes pour être notifié des nouveaux biens correspondant à vos critères.",
  },
  {
    id: "item-6",
    number: "06",
    question: "Travaillez-vous avec des notaires locaux ?",
    answer:
      "Oui, nous collaborons avec un réseau de notaires et d'avocats spécialisés en droit immobilier ivoirien pour sécuriser vos transactions et vous accompagner dans toutes les démarches administratives.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ Badge */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-600 text-sm font-medium" 
               >
            FAQ
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center mb-12 sm:mb-16 lg:mb-20"
            style={{ color: '#252525' }}>
          Questions Fréquemment Posées
        </h2>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-2 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                style={{ borderColor: '#A07539' }}
              >
                <AccordionTrigger className="px-6 py-6 hover:no-underline group">
                  <div className="flex items-center space-x-4 text-left w-full">
                    <span className="font-medium text-sm sm:text-base flex-shrink-0 px-3 py-1 rounded-full"
                          style={{ 
                            backgroundColor: '#EADD8E',
                            color: '#252525'
                          }}>
                      {faq.number}
                    </span>
                    <span className="font-medium text-lg sm:text-xl lg:text-2xl transition-colors group-hover:opacity-80"
                          style={{ color: '#252525' }}>
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="flex space-x-4">
                    <div className="w-8 flex-shrink-0"></div>
                    <p className="leading-relaxed text-sm sm:text-base lg:text-lg font-light"
                       style={{ color: '#252525', opacity: 0.8 }}>
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help Section */}
        {/* <div className="text-center mt-12 sm:mt-16">
          <p className="mb-4 text-lg" style={{ color: '#252525', opacity: 0.8 }}>
            Vous avez encore des questions ?
          </p>
          <button className="inline-flex items-center px-8 py-4 font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-105 text-lg"
                  style={{ 
                    backgroundColor: '#A07539',
                    color: 'white'
                  }}>
            Contactez notre équipe
          </button>
        </div> */}
      </div>
    </section>
  )
}