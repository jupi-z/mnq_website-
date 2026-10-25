import type { Locale } from "@/lib/site";

export function ContactChannels({locale}:{locale:Locale}) {
  const options = locale==="fr"
    ? [
        {id:"01",label:"Projet ou prestation",subject:"Demande de collaboration — prestation ou projet"},
        {id:"02",label:"Partenariat commercial",subject:"Proposition de partenariat commercial"},
        {id:"03",label:"Coopération technique ou institutionnelle",subject:"Proposition de coopération technique ou institutionnelle"},
        {id:"04",label:"Projet stratégique",subject:"Prise de contact — partenariat stratégique"}
      ]
    : [
        {id:"01",label:"Project or service inquiry",subject:"Project or service inquiry"},
        {id:"02",label:"Commercial partnership",subject:"Commercial partnership proposal"},
        {id:"03",label:"Technical or institutional cooperation",subject:"Technical or institutional cooperation"},
        {id:"04",label:"Strategic initiative",subject:"Strategic partnership inquiry"}
      ];
  return <section className="channels" aria-labelledby="channels-heading">
    <h2 id="channels-heading">{locale==="fr"?"Choisir l’objet de votre demande":"Choose the purpose of your inquiry"}</h2>
    <p>{locale==="fr"?"Sélectionnez un sujet pour préparer votre message dans votre logiciel de messagerie. Aucun formulaire ne conserve vos informations sur ce site.":"Select a subject to prepare an email using your own mail application. No form stores your information on this website."}</p>
    <div className="channel-grid">
      {options.map(option=><a className="channel" key={option.id} href={"mailto:contact@monarquegrp.com?subject="+encodeURIComponent(option.subject)}>
        <span>{option.id}</span><strong>{option.label}</strong><span aria-hidden="true">↗</span>
      </a>)}
    </div>
  </section>;
}
