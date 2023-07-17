export default function Sections() {
    return sectionContent.map(section =>
        <div>
            <SectionHeader title={section.title}/>
            {section.map(subSection =>
                <div>
                    <Section
                        title={subSection.title}
                        description={subSection.description}
                        picture={subSection.picture}
                    />
                </div>
            )}
        </div>
    );
}

function SectionHeader({title}) {
    return (
        <div style={styles.sectionHeader}>
            {title}
        </div>
    );
}

function Section({title, description, picture}) {
    return (
        <div style={styles.description}>
            <img style={styles.picture} alt="Title" src={picture}></img>
            <h2 style={styles.title}>{title}</h2>
            {description}
        </div>
    );
}

let styles = {
    description: {},
    picture: {},
    title: {},
    sectionHeader: {}
}

const sectionContent = [{
    education: {
        title: "Education",

        purdue: {
            title: "Purdue",
            description: "",
            picture: ""
        },

        ivyTech: {
            title: "IvyTech",
            description: "",
            picture: ""
        },

        delta: {
            title: "Delta High School",
            description: "",
            picture: ""
        }
    },

    creations: {
        title: "Creations",

        judgeMe: {
            title: "JudgeMe",
            description: "",
            picture: ""
        }
    }
}]