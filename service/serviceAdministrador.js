function deleteChildNode(container) {
    while (container.hasChildNodes()) {
        container.childNodes.forEach(child => child.remove());
    }
}

export {
    deleteChildNode
}