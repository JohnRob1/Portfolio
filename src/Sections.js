import purduePic from "../assets/purdue_logo.png"
import ivyPic from "../assets/ivytech_logo.png"
import bsuPic from "../assets/bsu_logo.png";
import dhsPic from "../assets/dhs_logo.jpg";
import styles from "./Sections.module.css"

export default function Sections() {
    return(
        sectionContent.map((section, index) =>
            <Section
                title={section.title}
                section={section}
            />
        )
    );
}

function Section({title, section, image}) {
    return (
        <div className={styles.section}>
            <h1 className={styles.header}>
                {title}
            </h1>
            {section.content.map((subSection, index) =>
                <SectionContent key={index}
                         title={subSection.title}
                         description={subSection.description}
                         picture={subSection.picture}
                />
            )}
        </div>
    );
}

function SectionContent({title, description, picture}) {
    return (
        <div className={styles.item}>
            <img className={styles.itemPicture} alt="TitlePic" src={picture}></img>
            <div className={styles.itemTitleAndDescriptionDiv}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}

const sectionContent = [
    {
        title: "Education",
        content: [
            {
                title: "Purdue University",
                description: "Bachelor of Science in Computer Science, Class of 2024",
                picture: purduePic,
                details: ""
            },
            {
                title: "IvyTech",
                description: "",
                picture: ivyPic,
                details: ""
            },
            {
                title: "Ball State University",
                description: "",
                picture: bsuPic,
                details: "",
            },
            {
                title: "Delta High School",
                description: "",
                picture: dhsPic,
                details: ""
            }
        ]
    },

    {
        title: "Creations",
        content: [
            {
                title: "JudgeMe",
                description: "",
                picture: "",
                details: ""
            },
            {
                title: "My Notion Templates",
                description: "",
                picture: "",
                details: ""
            },
            {
                title: "This Resume Website",
                description: "",
                picture: "",
                details: ""
            }
        ]
    },

    {
        title: "Experience",
        content: [
            {
                title: "Fisher Packing",
                description: "",
                picture: "",
                details: ""
            }
        ]
    }
]