import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("child")) {
            const [,kidId] = itemClicked.id.split("--")

            for (const kid of children) {
                if (kid.id === parseInt(kidId)) {
                    window.alert(`${kid.name} has a wish of ${kid.wish}`)

                }
            }
        }
    }
)

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li id="child--${child.id}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

