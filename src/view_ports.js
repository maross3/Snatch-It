
class view {

    insert(context) {
        // base functionality
    }

    eject(context) {
        // base functionality
    }

    bookmark(context) {
        // base functionality
    }

    addNotes(context) {
        // base functionality
    }
}

class hierarchy_view extends view {
    #list = null;

    insert(context){
        // overrides
        list.invalidate(context.node);


        // context changes? call super
        super.insert(context);
    }
}

class sandbox_view extends view {

    insert(context){
        // overrides

        // context changes? call super
        super.insert(context);
    }
}

hierarchy = new hierarchy_view();
sandbox = new sandbox_view();

function entry(command) {
    if (command.iD == "insert")
        insert(command.context);

    if (command.iD == "eject")
        eject(command.context);

    if (command.iD == "bookmark")
        bookmark(command.context);

    if (command.iD == "addNotes")
        addNotes(command.context);


}

function insert(context) {
    hierarchy.insert(context);
    sandbox.insert(context);
}

function eject(context){
    hierarchy.eject(context);
    sandbox.eject(context);
}

function bookmark(context) {
    hierarchy.bookmark(context);
    sandbox.bookmark(context);
}

function addNotes(context) {
    hierarchy.addNotes(context);
    sandbox.addNotes(context);
}
