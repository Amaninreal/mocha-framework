import { expect, assert, should } from 'chai';
should();

let a = 1, b = 1;

//using expect
expect(a).to.be.equals(b, "a and b are not equal");
//using should
a.should.be.equal(b);
//using assert
assert.equal(a, b, 'a and b are not equal');
expect(42).to.be.a('number');
expect('test').to.be.a('string');



function myObject(){
    return{
        name:'Rakesh',
        age:19
    }
}
let x = new myObject(), y = new myObject();
//expect
expect(x).to.be.an('object');
//deep.equal or deep.equals
expect(x).to.be.deep.equals(y, 'x and y are not equal');
x.should.to.be.deep.equals(y, 'x and y are not equal');
//assert
assert.deepEqual(x,y, 'x and y are not equal');




const user = { 
    name: 'Abhishek', 
    age: 27, 
    active: true 
  };
  //using expect
  expect(user).to.have.property('name');
  //using should
  user.should.have.all.keys('name', 'age', 'active');
  //using assert
  assert.include(user, { name: 'Abhishek' });



//arrays
let numbers = [4,5,6,7];
//expect
expect(numbers).to.be.an('array').that.includes(7);
expect(numbers).to.have.members([4,5,6,7]);
//should()
(numbers).should.be.an('array').that.includes(4);
//assert
assert.isArray(numbers, 'numbers is not an array');
  