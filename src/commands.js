
export const insertCommand = {
    iD: 'insert',
    context: contextData
}

export const removeCommand = {
    iD: 'remove',
    context: contextData
}

export const bookmarkCommand = {
    iD: 'bookmark',
    context: contextData
}

export const addNotesCommand = {
    iD: 'addNotes',
    context: contextData
}

export const createGroupCommand = {
    iD: 'createGroup',
    context: contextData
}

let contextData = {
    node: null,
    success: contextData
}
// context = {
// note: string
// graphNode: node
// success: true
// }