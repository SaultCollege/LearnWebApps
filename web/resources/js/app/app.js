/* 
 * http://www.cs.columbia.edu/~lennox/3101-03/pseudo-object.html
 * http://www.programming9.com/programs/java/306-design-a-vehicle-class-hierarchy-in-java-to-demonstrate-polymorphism
 */
/* create a Vehicle object using a constructor function*/
function Vehicle(make, model, year, image, vin){
    this.make   = make,
    this.model  = model,
    this.year   = year;
    this.image  = image;
    this.vin    = vin;
    // we want to override toString but we cant do it here.  We want to add it to the 
    // .prototype property because thats where all inherited members live
    // we add toString below
};
// override toString() in the protitype because thats where inherited members live
// Note** use 'this' to access properties
Vehicle.prototype.toString = function(){return this.make+', '+this.model+', '+this.year;};


