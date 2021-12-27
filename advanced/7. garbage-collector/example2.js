// 'Reference counting garbage collection' example:

var object_1 = {
	object_2: {
		object_3: 7
	}
};

// In the code above, two objects have been created. One of them is referred by another
// as one of its properties. Currently, none can be garbage collected with the reference 
// counting algorithm.

var object_4 = object_1;

// Now the "object_4" variable is the second thing that has a reference to the object.
// The objects that were originally in "object_1" has a unique reference embodied 
// by the "object_4" variable.

object_1 = "Object 1";

var object_5 = object_4.object_2;
// Reference to "object_2" property of the object. This object now has 2 references: 
// first one as a property, the other as the "object_5" variable.

object_4 = "Object 4";

// The object that was in "object_1" has now zero references to it. It can be
// garbage collected. However its "object_2" property is still referenced by the
// "object_5" variable, so it cannot be freed.

object_5 = null;

// Now the "object_2" property has no references to it and so it can be garbage collected.