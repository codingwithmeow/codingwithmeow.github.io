function makeMultiplier (multiplier) {

    function b() {
        console.log("Multiplier is: " + multiplier);
    }

    b();

    return (
        function (x) {
            return multiplier * x;
        }
    );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));

// Now, when we invoke the function let's go ahead and do that, 
// save it. We invoke the function it says multiplier is 2. Now, 
// how does the inner function right here B know that the multiplier 
// is 2? Well, we spoke about what happens when a function is executed. 
// When a function is executed it gets a few things. Number one, 
// it gets it's own execution context so it's isolated from everything 
// else. Number two, it gets a special vis variable, we spoke about that 
// before. Number three, it gets a reference to its outer lexical 
// environment. So when a variable is referenced inside of a function 
// the first thing it does is check whether or not this variable has 
// been defined inside of it's local lexical environment meaning has 
// the multiplier variable been defined inside the B function? And the
// answer is it's not, it's not defined. And if it's not defined it means 
// the next thing that the JavaScript engine does it looks at the outside 
// lexical environment of this function. Well the outside lexical 
// environment of this function meaning where it's defined the outside 
// of that is the makeMultiplier function. And the makeMultiplier 
// function has that variable, so once it finds it it goes ahead and 
// uses it in the function B that we're executing right here. Now, that's 
// all great. Now, let's take a look at our return statement. The problem
// is that our return statement doesn't really create its own execution 
// environment, because this is not a function execution. This is just a 
// function value. This is the object a function that gets returned back 
// to the caller of the makeMultiplier function. Okay, so if this is not 
// an execution of the function that means it doesn't get its own vis 
// variable. It means it does not get an out of reference. It simply 
// gets returned to the caller. So now, when it gets returned to the 
// caller in this line right here, so this variable is now equal to 
// this function, and in the next line will be actually execute double 
// all and pass it a ten. This function is now finally being executed, 
// which means it is now getting it's own execution environment and 
// it is now in this line right here.

// It gets its own execution environment, and it gets its own outer 
// variable environment, and so on. So how then can it possibly know
// what the multiplier variable is? Because at the time that this is 
// executing the makeMultiplier function is no longer in the execution 
// stack. It's done. It returned whatever we needed to return, and is no 
// longer functioning. It's done. It's part of the execution stack. Well, 
// the reason this still works is because of JavaScript closures. Since a 
// function like this returned from inside of this function JavaScript 
// preserves its outer lexical environment memory space for this function, 
// so this function can go ahead and produce what it needs to produce. So 
// the multiplier is something that's still sitting in memory in lexical 
// outside scope of this function. So even when we call doubleALL it will 
// go ahead and execute this function. It will create its own execution 
// environment. It will go ahead and look for the multiplier variable in 
// its own execution environment. It will not find it and it will then try 
// to look for for this variable in its outer lexical environment, and the 
// outer lexical environment memory space will still remain even though 
// the makeMultiplier function no longer exists. That's how we basically 
// are able to trap or to close in whatever variables and whatever memory 
// space is sitting outside of the lexical environment of this return 
// function, and that's how closures work.