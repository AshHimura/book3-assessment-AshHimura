import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("star")) {
            const [,starId] = itemClicked.id.split("--")

            for (const star of celebrities) {
                if (star.id === parseInt(starId)) {
                    window.alert(`${star.name} is ${star.sport} star`)

                    
                }
            }
        }
    }
)

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li id="star--${celebrity.id}">${celebrity.name}</li>`
    }

    html += "</ol>"
    return html
}
