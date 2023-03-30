import "./list_service.css";

const ListService = () => {
  return (
    <div className="list__service">
      <h2>DECOUVREZ NOS DIFFERENTS SERVICES</h2>
      <div className="list__service__container">
        <div className="list_service_dark">
          <div className="list__service_content">
            <div className="list__service_img"></div>
            <div className="list__service__infos">
              <h2>Business développement</h2>
              <p>
                Vous avez un projet de développement de votre activité, mais
                vous ne savez pas comment le concrétiser? Vous cherchez à
                conquérir de nouveaux marchés, à diversifier votre offre ou à
                fidéliser vos clients? Equato Link Group vous accompagne dans la
                définition et la mise en œuvre de votre stratégie de business
                développement. Nous vous aidons à identifier les opportunités
                d'affaires, à analyser votre environnement concurrentiel, à
                définir vos objectifs et vos plans d'action. Nous vous apportons
                également notre soutien dans la recherche de financements, la
                négociation de contrats ou la création de partenariats.
              </p>
            </div>
          </div>
          <div className="list__service_content">
            <div className="list__service_img"></div>
            <div className="list__service__infos">
              <h2>conseil et accompagnement</h2>
              <p>
                Vous êtes une entreprise administrative et vous souhaitez
                améliorer votre performance et votre compétitivité? Vous voulez
                renforcer vos capacités managériales, organisationnelles ou
                financières? Equato Link Group vous apporte son conseil et son
                accompagnement personnalisés. Nous vous aidons à analyser vos
                forces et vos faiblesses, à définir vos axes d'amélioration et
                vos indicateurs de suivi. Nous vous proposons des solutions
                adaptées à vos besoins et à votre contexte. Nous vous formons et
                nous vous coachons pour renforcer vos compétences et celles de
                vos collaborateurs.
              </p>
            </div>
          </div>
        </div>
        <div className="list_service_light">
          <div className="list__service_content reverse">
            <div className="list__service_img"></div>
            <div className="list__service__infos">
              <h2>Apporteur d'affaires</h2>
              <p>
                Vous souhaitez augmenter votre chiffre d'affaires, mais vous
                n'avez pas le temps ou les ressources pour prospecter de
                nouveaux clients? Vous voulez bénéficier d'un réseau de contacts
                qualifiés et fiables? Equato Link Group vous propose son service
                d'apporteur d'affaires. Nous mettons en relation votre
                entreprise avec des prospects intéressés par vos produits ou
                services. Nous vous fournissons des leads qualifiés et vérifiés,
                que vous pouvez contacter directement pour leur proposer votre
                offre. Nous vous accompagnons également dans le suivi des
                relations commerciales et la fidélisation des clients.
              </p>
            </div>
          </div>
          <div className="list__service_content reverse">
            <div className="list__service_img"></div>
            <div className="list__service__infos">
              <h2>Gestion des marchés publics</h2>
              <p>
                Vous souhaitez répondre à des appels d'offres publics, mais vous
                ne savez pas comment vous y prendre? Vous voulez optimiser vos
                chances de remporter des marchés publics? Equato Link Group vous
                offre son expertise en matière de gestion des marchés publics.
                Nous vous aidons à identifier les opportunités de marchés
                publics adaptées à votre profil et à votre secteur d'activité.
                Nous vous assistons dans la rédaction et le montage des dossiers
                de candidature, en respectant les règles et les délais imposés.
                Nous vous conseillons également sur les aspects juridiques,
                techniques et financiers des marchés publics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListService;
