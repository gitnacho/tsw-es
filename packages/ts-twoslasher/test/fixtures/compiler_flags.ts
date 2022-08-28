// @noImplicitAny: false
// @target: ES2015

// Esto no lanzará debido al noImplicitAny
function fn(s) {
  console.log(s.subtr(3))
}

fn(42);
