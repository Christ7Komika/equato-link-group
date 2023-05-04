import i18next from "i18next";
import { initReactI18next } from "react-i18next";

interface Lang {
  home: {
    header: {
      title: string;
      content: string;
      button: string;
    };
    us: {
      title: string;
      content: string;
    };
    services: {
      title: string;
      firstcard: {
        title: string;
        content: string;
      };
      secondcard: {
        title: string;
        content: string;
      };
      thirdcard: {
        title: string;
        content: string;
      };
      fourthcard: {
        title: string;
        content: string;
      };
    };
    objectifs: {
      title: string;
      firstcontent: string;
      secondcontent: string;
      firstobj: string;
      secondobj: string;
      thirdobj: string;
    };
    valor: {
      title: string;
      firstvalor: string;
      secondvalor: string;
      thirdvalor: string;
      fourthvalor: string;
    };
    partner: {
      title: string;
    };
  };
  contact: {
    slider: {
      title: string;
      content: string;
    };
    infoscontact: {
      title: string;
    };
    formcontact: {
      title: string;
      content: string;
      email: string;
      phone: string;
      address: string;
    };
    form: {
      firstname: string;
      lastname: string;
      email: string;
      phone: string;
      object: string;
      message: string;
      button: string;
    };
  };
  services: {
    slide: {
      title: string;
      content: string;
    };
    list: {
      title: string;
      firstservice: {
        title: string;
        content: string;
      };
      secondservice: {
        title: string;
        content: string;
      };
      thirdservice: {
        title: string;
        content: string;
      };
      fourthservice: {
        title: string;
        content: string;
      };
    };
  };
  personnel: {
    title: string;
    content: string;
  };
  footer: {
    company: string;
    link: {
      title: string;
      firstlink: string;
      secondlink: string;
      thirdlink: string;
      fourthlink: string;
    };
  };
  nav: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
}

const french: Lang = {
  home: {
    header: {
      title:
        "BIENVENUE CHEZ EQUATO LINK GROUP, VOTRE PARTENAIRE DE CONFIANCE POUR LE DÉVELOPPEMENT DE VOTRE BUSINESS.",
      content:
        "Nous sommes une entreprise spécialisée dans le business développement, apporteur d'affaires et de gestion des marchés publics.",
      button: "Nous contacter",
    },
    us: {
      title: "QUI SOMMES NOUS ?",
      content:
        "Equato Link Group est une entreprise spécialisée dans le business développement, apporteur d'affaires, la gestion des marchés publics et le conseil et accompagnement d'entreprises. Nous accompagnons nos clients dans la réalisation de leurs projets, en leur offrant des solutions sur mesure et adaptées à leurs besoins. Nous disposons d'un réseau de partenaires qualifiés et expérimentés dans différents domaines d'activité. Que vous soyez une PME, une grande entreprise ou une administration publique, nous vous aidons à optimiser votre performance et à atteindre vos objectifs.",
    },
    services: {
      title: "NOS SERVICES",
      firstcard: {
        title: "BUSINESS DÉVELOPPEMENT",
        content:
          "Nous vous aidons à identifier et à saisir les opportunités de croissance sur votre marché, en vous accompagnant dans la définition et la mise en œuvre de votre stratégie commerciale.",
      },
      secondcard: {
        title: "CONSEIL ET ACCOMPAGNEMENT",
        content:
          "Nous travaillons en étroite collaboration avec les entreprises pour comprendre leurs besoins et leurs objectifs, afin de leur fournir des solutions sur mesure.",
      },
      thirdcard: {
        title: "APPORTEUR D'AFFAIRES",
        content:
          "Nous vous mettons en relation avec des prospects qualifiés et intéressés par vos produits ou services, en utilisant notre base de données et nos outils de prospection.",
      },
      fourthcard: {
        title: "GESTION DES MARCHÉS PUBLICS",
        content:
          "Nous vous assistons dans la réponse aux appels d’offres publics, en vous conseillant sur les aspects juridiques, techniques et financiers de votre dossier.",
      },
    },
    objectifs: {
      title: "NOS OBJECTIFS",
      firstcontent:
        "Chez equato link group, nous savons que chaque client a des objectifs différents et spécifiques. Que vous souhaitiez augmenter votre chiffre d’affaires, renforcer votre positionnement sur votre marché ou accéder à de nouveaux marchés publics, nous avons les solutions qu’il vous faut.",
      secondcontent:
        "Nous vous accompagnons dans la définition et la réalisation de vos objectifs, en vous offrant des services de qualité et sur mesure. Nous mettons à votre disposition notre expertise, notre réseau et nos outils pour vous aider à optimiser votre performance et à atteindre vos ambitions.",
      firstobj:
        "Augmenter votre chiffre d’affaires et votre rentabilité en développant votre portefeuille clients et en fidélisant vos clients existants.",
      secondobj:
        "Renforcer votre positionnement et votre notoriété sur votre marché en vous différenciant de vos concurrents et en valorisant votre offre.",
      thirdobj:
        "Accéder à de nouveaux marchés publics en répondant aux exigences des donneurs d’ordre et en remportant des contrats.",
    },
    valor: {
      title: "NOS VALEURS",
      firstvalor: "L'ECOUTE",
      secondvalor: "LA CONFIANCE",
      thirdvalor: "L'EXECELLENCE",
      fourthvalor: "L'INNOVATION",
    },
    partner: {
      title: "NOS PARTENAIRES",
    },
  },
  contact: {
    slider: {
      title: "CONTACT",
      content:
        "Vous cherchez à développer votre entreprise ? Nous pouvons vous aider. Contactez-nous pour discuter de vos besoins en matière de développement d'affaires et de stratégie de croissance.",
    },
    infoscontact: {
      title: "NOUS CONTACTER",
    },
    formcontact: {
      title: "NOUS CONTACTER",
      content:
        "Vous avez des questions, des remarques ou des suggestions? Vous souhaitez en savoir plus sur nos services? N’hésitez pas à nous contacter via le formulaire ci-dessous. Nous vous répondrons dans les meilleurs délais.",
      email: "Lorem ipsum dolor sit amet consectetur.",
      phone: "Lorem ipsum dolor sit amet consectetur.",
      address: "Lorem ipsum dolor sit amet consectetur.",
    },
    form: {
      firstname: "Nom *",
      lastname: "Prénom *",
      email: "Email *",
      phone: "Numéro de téléphone *",
      object: "Objet du message *",
      message: "Message",
      button: "Envoyer",
    },
  },
  services: {
    slide: {
      title: "SERVICES",
      content:
        "Nous vous proposons des solutions sur mesure pour vous aider à développer votre activité, à optimiser votre performance et à renforcer votre compétitivité. Que vous soyez une PME, une grande entreprise ou une administration publique, nous mettons à votre disposition notre expertise, notre réseau et notre savoir-faire pour répondre à vos besoins et à vos attentes",
    },
    list: {
      title: "DECOUVREZ NOS DIFFERENTS SERVICES",
      firstservice: {
        title: "BUSINESS DÉVELOPPEMENT",
        content:
          "Vous avez un projet de développement de votre activité, mais vous ne savez pas comment le concrétiser? Vous cherchez à conquérir de nouveaux marchés, à diversifier votre offre ou à fidéliser vos clients? Equato Link Group vous accompagne dans la définition et la mise en œuvre de votre stratégie de business développement. Nous vous aidons à identifier les opportunités d'affaires, à analyser votre environnement concurrentiel, à définir vos objectifs et vos plans d'action. Nous vous apportons également notre soutien dans la recherche de financements, la négociation de contrats ou la création de partenariats.",
      },
      secondservice: {
        title: "CONSEIL ET ACCOMPAGNEMENT",
        content:
          "Vous êtes une entreprise administrative et vous souhaitez améliorer votre performance et votre compétitivité? Vous voulez renforcer vos capacités managériales, organisationnelles ou financières? Equato Link Group vous apporte son conseil et son accompagnement personnalisés. Nous vous aidons à analyser vos forces et vos faiblesses, à définir vos axes d'amélioration et vos indicateurs de suivi. Nous vous proposons des solutions adaptées à vos besoins et à votre contexte. Nous vous formons et nous vous coachons pour renforcer vos compétences et celles de vos collaborateurs.",
      },
      thirdservice: {
        title: "APPORTEUR D'AFFAIRES",
        content:
          "Vous souhaitez augmenter votre chiffre d'affaires, mais vous n'avez pas le temps ou les ressources pour prospecter de nouveaux clients? Vous voulez bénéficier d'un réseau de contacts qualifiés et fiables? Equato Link Group vous propose son service d'apporteur d'affaires. Nous mettons en relation votre entreprise avec des prospects intéressés par vos produits ou services. Nous vous fournissons des leads qualifiés et vérifiés, que vous pouvez contacter directement pour leur proposer votre offre. Nous vous accompagnons également dans le suivi des relations commerciales et la fidélisation des clients.",
      },
      fourthservice: {
        title: "GESTION DES MARCHÉS PUBLICS",
        content:
          "Vous souhaitez répondre à des appels d'offres publics, mais vous ne savez pas comment vous y prendre? Vous voulez optimiser vos chances de remporter des marchés publics? Equato Link Group vous offre son expertise en matière de gestion des marchés publics. Nous vous aidons à identifier les opportunités de marchés publics adaptées à votre profil et à votre secteur d'activité. Nous vous assistons dans la rédaction et le montage des dossiers de candidature, en respectant les règles et les délais imposés. Nous vous conseillons également sur les aspects juridiques, techniques et financiers des marchés publics.",
      },
    },
  },
  personnel: {
    title: "PERSONNEL",
    content:
      "Vous cherchez à développer votre entreprise ? Nous pouvons vous aider. Contactez-nous pour discuter de vos besoins en matière de développement d'affaires et de stratégie de croissance.",
  },
  footer: {
    company:
      "Equato Link Group vous accompagnons dans vos projets avec professionnalisme et efficacité",
    link: {
      title: "LIEN",
      firstlink: "Acceuil",
      secondlink: "Nos Services",
      thirdlink: "Personnel",
      fourthlink: "Nous Contacter",
    },
  },
  nav: {
    first: "ACCEUIL",
    second: "NOS SERVICES",
    third: "PERSONNEL",
    fourth: "NOUS CONTACTER",
  },
};

const english: Lang = {
  home: {
    header: {
      title:
        "BIENVENUE CHEZ EQUATO LINK GROUP, VOTRE PARTENAIRE DE CONFIANCE POUR LE DÉVELOPPEMENT DE VOTRE BUSINESS.",
      content:
        "Nous sommes une entreprise spécialisée dans le business développement, apporteur d'affaires et de gestion des marchés publics.",
      button: "Nous contacter",
    },
    us: {
      title: "QUI SOMMES NOUS ?",
      content:
        "Equato Link Group est une entreprise spécialisée dans le business développement, apporteur d'affaires, la gestion des marchés publics et le conseil et accompagnement d'entreprises. Nous accompagnons nos clients dans la réalisation de leurs projets, en leur offrant des solutions sur mesure et adaptées à leurs besoins. Nous disposons d'un réseau de partenaires qualifiés et expérimentés dans différents domaines d'activité. Que vous soyez une PME, une grande entreprise ou une administration publique, nous vous aidons à optimiser votre performance et à atteindre vos objectifs.",
    },
    services: {
      title: "NOS SERVICES",
      firstcard: {
        title: "BUSINESS DÉVELOPPEMENT",
        content:
          "Nous vous aidons à identifier et à saisir les opportunités de croissance sur votre marché, en vous accompagnant dans la définition et la mise en œuvre de votre stratégie commerciale.",
      },
      secondcard: {
        title: "CONSEIL ET ACCOMPAGNEMENT",
        content:
          "Nous travaillons en étroite collaboration avec les entreprises pour comprendre leurs besoins et leurs objectifs, afin de leur fournir des solutions sur mesure.",
      },
      thirdcard: {
        title: "APPORTEUR D'AFFAIRES",
        content:
          "Nous vous mettons en relation avec des prospects qualifiés et intéressés par vos produits ou services, en utilisant notre base de données et nos outils de prospection.",
      },
      fourthcard: {
        title: "GESTION DES MARCHÉS PUBLICS",
        content:
          "Nous vous assistons dans la réponse aux appels d’offres publics, en vous conseillant sur les aspects juridiques, techniques et financiers de votre dossier.",
      },
    },
    objectifs: {
      title: "NOS OBJECTIFS",
      firstcontent:
        "Chez equato link group, nous savons que chaque client a des objectifs différents et spécifiques. Que vous souhaitiez augmenter votre chiffre d’affaires, renforcer votre positionnement sur votre marché ou accéder à de nouveaux marchés publics, nous avons les solutions qu’il vous faut.",
      secondcontent:
        "Nous vous accompagnons dans la définition et la réalisation de vos objectifs, en vous offrant des services de qualité et sur mesure. Nous mettons à votre disposition notre expertise, notre réseau et nos outils pour vous aider à optimiser votre performance et à atteindre vos ambitions.",
      firstobj:
        "Augmenter votre chiffre d’affaires et votre rentabilité en développant votre portefeuille clients et en fidélisant vos clients existants.",
      secondobj:
        "Renforcer votre positionnement et votre notoriété sur votre marché en vous différenciant de vos concurrents et en valorisant votre offre.",
      thirdobj:
        "Accéder à de nouveaux marchés publics en répondant aux exigences des donneurs d’ordre et en remportant des contrats.",
    },
    valor: {
      title: "NOS VALEURS",
      firstvalor: "L'ECOUTE",
      secondvalor: "LA CONFIANCE",
      thirdvalor: "L'EXECELLENCE",
      fourthvalor: "L'INNOVATION",
    },
    partner: {
      title: "NOS PARTENAIRES",
    },
  },
  contact: {
    slider: {
      title: "CONTACT",
      content:
        "Vous cherchez à développer votre entreprise ? Nous pouvons vous aider. Contactez-nous pour discuter de vos besoins en matière de développement d'affaires et de stratégie de croissance.",
    },
    infoscontact: {
      title: "NOUS CONTACTER",
    },
    formcontact: {
      title: "NOUS CONTACTER",
      content:
        "Vous avez des questions, des remarques ou des suggestions? Vous souhaitez en savoir plus sur nos services? N’hésitez pas à nous contacter via le formulaire ci-dessous. Nous vous répondrons dans les meilleurs délais.",
      email: "Lorem ipsum dolor sit amet consectetur.",
      phone: "Lorem ipsum dolor sit amet consectetur.",
      address: "Lorem ipsum dolor sit amet consectetur.",
    },
    form: {
      firstname: "Nom *",
      lastname: "Prénom *",
      email: "Email *",
      phone: "Numéro de téléphone *",
      object: "Objet du message *",
      message: "Message",
      button: "Envoyer",
    },
  },
  services: {
    slide: {
      title: "SERVICES",
      content:
        "Nous vous proposons des solutions sur mesure pour vous aider à développer votre activité, à optimiser votre performance et à renforcer votre compétitivité. Que vous soyez une PME, une grande entreprise ou une administration publique, nous mettons à votre disposition notre expertise, notre réseau et notre savoir-faire pour répondre à vos besoins et à vos attentes",
    },
    list: {
      title: "DECOUVREZ NOS DIFFERENTS SERVICES",
      firstservice: {
        title: "BUSINESS DÉVELOPPEMENT",
        content:
          "Vous avez un projet de développement de votre activité, mais vous ne savez pas comment le concrétiser? Vous cherchez à conquérir de nouveaux marchés, à diversifier votre offre ou à fidéliser vos clients? Equato Link Group vous accompagne dans la définition et la mise en œuvre de votre stratégie de business développement. Nous vous aidons à identifier les opportunités d'affaires, à analyser votre environnement concurrentiel, à définir vos objectifs et vos plans d'action. Nous vous apportons également notre soutien dans la recherche de financements, la négociation de contrats ou la création de partenariats.",
      },
      secondservice: {
        title: "CONSEIL ET ACCOMPAGNEMENT",
        content:
          "Vous êtes une entreprise administrative et vous souhaitez améliorer votre performance et votre compétitivité? Vous voulez renforcer vos capacités managériales, organisationnelles ou financières? Equato Link Group vous apporte son conseil et son accompagnement personnalisés. Nous vous aidons à analyser vos forces et vos faiblesses, à définir vos axes d'amélioration et vos indicateurs de suivi. Nous vous proposons des solutions adaptées à vos besoins et à votre contexte. Nous vous formons et nous vous coachons pour renforcer vos compétences et celles de vos collaborateurs.",
      },
      thirdservice: {
        title: "APPORTEUR D'AFFAIRES",
        content:
          "Vous souhaitez augmenter votre chiffre d'affaires, mais vous n'avez pas le temps ou les ressources pour prospecter de nouveaux clients? Vous voulez bénéficier d'un réseau de contacts qualifiés et fiables? Equato Link Group vous propose son service d'apporteur d'affaires. Nous mettons en relation votre entreprise avec des prospects intéressés par vos produits ou services. Nous vous fournissons des leads qualifiés et vérifiés, que vous pouvez contacter directement pour leur proposer votre offre. Nous vous accompagnons également dans le suivi des relations commerciales et la fidélisation des clients.",
      },
      fourthservice: {
        title: "GESTION DES MARCHÉS PUBLICS",
        content:
          "Vous souhaitez répondre à des appels d'offres publics, mais vous ne savez pas comment vous y prendre? Vous voulez optimiser vos chances de remporter des marchés publics? Equato Link Group vous offre son expertise en matière de gestion des marchés publics. Nous vous aidons à identifier les opportunités de marchés publics adaptées à votre profil et à votre secteur d'activité. Nous vous assistons dans la rédaction et le montage des dossiers de candidature, en respectant les règles et les délais imposés. Nous vous conseillons également sur les aspects juridiques, techniques et financiers des marchés publics.",
      },
    },
  },
  personnel: {
    title: "PERSONNEL",
    content:
      "Vous cherchez à développer votre entreprise ? Nous pouvons vous aider. Contactez-nous pour discuter de vos besoins en matière de développement d'affaires et de stratégie de croissance.",
  },
  footer: {
    company:
      "Equato Link Group vous accompagnons dans vos projets avec professionnalisme et efficacité",
    link: {
      title: "LIEN",
      firstlink: "Acceuil",
      secondlink: "Nos Services",
      thirdlink: "Personnel",
      fourthlink: "Nous Contacter",
    },
  },
  nav: {
    first: "HOME",
    second: "NOS SERVICES",
    third: "PERSONNEL",
    fourth: "CONTACT US",
  },
};
const italian: Lang = {
  home: {
    header: {
      title:
        "BIENVENUE CHEZ EQUATO LINK GROUP, VOTRE PARTENAIRE DE CONFIANCE POUR LE DÉVELOPPEMENT DE VOTRE BUSINESS.",
      content:
        "Nous sommes une entreprise spécialisée dans le business développement, apporteur d'affaires et de gestion des marchés publics.",
      button: "Nous contacter",
    },
    us: {
      title: "QUI SOMMES NOUS ?",
      content:
        "Equato Link Group est une entreprise spécialisée dans le business développement, apporteur d'affaires, la gestion des marchés publics et le conseil et accompagnement d'entreprises. Nous accompagnons nos clients dans la réalisation de leurs projets, en leur offrant des solutions sur mesure et adaptées à leurs besoins. Nous disposons d'un réseau de partenaires qualifiés et expérimentés dans différents domaines d'activité. Que vous soyez une PME, une grande entreprise ou une administration publique, nous vous aidons à optimiser votre performance et à atteindre vos objectifs.",
    },
    services: {
      title: "NOS SERVICES",
      firstcard: {
        title: "BUSINESS DÉVELOPPEMENT",
        content:
          "Nous vous aidons à identifier et à saisir les opportunités de croissance sur votre marché, en vous accompagnant dans la définition et la mise en œuvre de votre stratégie commerciale.",
      },
      secondcard: {
        title: "CONSEIL ET ACCOMPAGNEMENT",
        content:
          "Nous travaillons en étroite collaboration avec les entreprises pour comprendre leurs besoins et leurs objectifs, afin de leur fournir des solutions sur mesure.",
      },
      thirdcard: {
        title: "APPORTEUR D'AFFAIRES",
        content:
          "Nous vous mettons en relation avec des prospects qualifiés et intéressés par vos produits ou services, en utilisant notre base de données et nos outils de prospection.",
      },
      fourthcard: {
        title: "GESTION DES MARCHÉS PUBLICS",
        content:
          "Nous vous assistons dans la réponse aux appels d’offres publics, en vous conseillant sur les aspects juridiques, techniques et financiers de votre dossier.",
      },
    },
    objectifs: {
      title: "NOS OBJECTIFS",
      firstcontent:
        "Chez equato link group, nous savons que chaque client a des objectifs différents et spécifiques. Que vous souhaitiez augmenter votre chiffre d’affaires, renforcer votre positionnement sur votre marché ou accéder à de nouveaux marchés publics, nous avons les solutions qu’il vous faut.",
      secondcontent:
        "Nous vous accompagnons dans la définition et la réalisation de vos objectifs, en vous offrant des services de qualité et sur mesure. Nous mettons à votre disposition notre expertise, notre réseau et nos outils pour vous aider à optimiser votre performance et à atteindre vos ambitions.",
      firstobj:
        "Augmenter votre chiffre d’affaires et votre rentabilité en développant votre portefeuille clients et en fidélisant vos clients existants.",
      secondobj:
        "Renforcer votre positionnement et votre notoriété sur votre marché en vous différenciant de vos concurrents et en valorisant votre offre.",
      thirdobj:
        "Accéder à de nouveaux marchés publics en répondant aux exigences des donneurs d’ordre et en remportant des contrats.",
    },
    valor: {
      title: "NOS VALEURS",
      firstvalor: "L'ECOUTE",
      secondvalor: "LA CONFIANCE",
      thirdvalor: "L'EXECELLENCE",
      fourthvalor: "L'INNOVATION",
    },
    partner: {
      title: "NOS PARTENAIRES",
    },
  },
  contact: {
    slider: {
      title: "CONTACT",
      content:
        "Vous cherchez à développer votre entreprise ? Nous pouvons vous aider. Contactez-nous pour discuter de vos besoins en matière de développement d'affaires et de stratégie de croissance.",
    },
    infoscontact: {
      title: "NOUS CONTACTER",
    },
    formcontact: {
      title: "NOUS CONTACTER",
      content:
        "Vous avez des questions, des remarques ou des suggestions? Vous souhaitez en savoir plus sur nos services? N’hésitez pas à nous contacter via le formulaire ci-dessous. Nous vous répondrons dans les meilleurs délais.",
      email: "Lorem ipsum dolor sit amet consectetur.",
      phone: "Lorem ipsum dolor sit amet consectetur.",
      address: "Lorem ipsum dolor sit amet consectetur.",
    },
    form: {
      firstname: "Nom *",
      lastname: "Prénom *",
      email: "Email *",
      phone: "Numéro de téléphone *",
      object: "Objet du message *",
      message: "Message",
      button: "Envoyer",
    },
  },
  services: {
    slide: {
      title: "SERVICES",
      content:
        "Nous vous proposons des solutions sur mesure pour vous aider à développer votre activité, à optimiser votre performance et à renforcer votre compétitivité. Que vous soyez une PME, une grande entreprise ou une administration publique, nous mettons à votre disposition notre expertise, notre réseau et notre savoir-faire pour répondre à vos besoins et à vos attentes",
    },
    list: {
      title: "DECOUVREZ NOS DIFFERENTS SERVICES",
      firstservice: {
        title: "BUSINESS DÉVELOPPEMENT",
        content:
          "Vous avez un projet de développement de votre activité, mais vous ne savez pas comment le concrétiser? Vous cherchez à conquérir de nouveaux marchés, à diversifier votre offre ou à fidéliser vos clients? Equato Link Group vous accompagne dans la définition et la mise en œuvre de votre stratégie de business développement. Nous vous aidons à identifier les opportunités d'affaires, à analyser votre environnement concurrentiel, à définir vos objectifs et vos plans d'action. Nous vous apportons également notre soutien dans la recherche de financements, la négociation de contrats ou la création de partenariats.",
      },
      secondservice: {
        title: "CONSEIL ET ACCOMPAGNEMENT",
        content:
          "Vous êtes une entreprise administrative et vous souhaitez améliorer votre performance et votre compétitivité? Vous voulez renforcer vos capacités managériales, organisationnelles ou financières? Equato Link Group vous apporte son conseil et son accompagnement personnalisés. Nous vous aidons à analyser vos forces et vos faiblesses, à définir vos axes d'amélioration et vos indicateurs de suivi. Nous vous proposons des solutions adaptées à vos besoins et à votre contexte. Nous vous formons et nous vous coachons pour renforcer vos compétences et celles de vos collaborateurs.",
      },
      thirdservice: {
        title: "APPORTEUR D'AFFAIRES",
        content:
          "Vous souhaitez augmenter votre chiffre d'affaires, mais vous n'avez pas le temps ou les ressources pour prospecter de nouveaux clients? Vous voulez bénéficier d'un réseau de contacts qualifiés et fiables? Equato Link Group vous propose son service d'apporteur d'affaires. Nous mettons en relation votre entreprise avec des prospects intéressés par vos produits ou services. Nous vous fournissons des leads qualifiés et vérifiés, que vous pouvez contacter directement pour leur proposer votre offre. Nous vous accompagnons également dans le suivi des relations commerciales et la fidélisation des clients.",
      },
      fourthservice: {
        title: "GESTION DES MARCHÉS PUBLICS",
        content:
          "Vous souhaitez répondre à des appels d'offres publics, mais vous ne savez pas comment vous y prendre? Vous voulez optimiser vos chances de remporter des marchés publics? Equato Link Group vous offre son expertise en matière de gestion des marchés publics. Nous vous aidons à identifier les opportunités de marchés publics adaptées à votre profil et à votre secteur d'activité. Nous vous assistons dans la rédaction et le montage des dossiers de candidature, en respectant les règles et les délais imposés. Nous vous conseillons également sur les aspects juridiques, techniques et financiers des marchés publics.",
      },
    },
  },
  personnel: {
    title: "PERSONNEL",
    content:
      "Vous cherchez à développer votre entreprise ? Nous pouvons vous aider. Contactez-nous pour discuter de vos besoins en matière de développement d'affaires et de stratégie de croissance.",
  },
  footer: {
    company:
      "Equato Link Group vous accompagnons dans vos projets avec professionnalisme et efficacité",
    link: {
      title: "LIEN",
      firstlink: "Acceuil",
      secondlink: "Nos Services",
      thirdlink: "Personnel",
      fourthlink: "Nous Contacter",
    },
  },
  nav: {
    first: "ACCEUIL",
    second: "NOS SERVICES",
    third: "PERSONNEL",
    fourth: "NOUS CONTACTER",
  },
};

i18next.use(initReactI18next).init({
  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    fr: {
      translation: french,
    },
    en: {
      translation: english,
    },
    it: {
      translation: italian,
    },
  },
});

export default i18next;
