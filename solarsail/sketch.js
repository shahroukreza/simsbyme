var BSlider
var r
function setup() {
  createCanvas(windowWidth, windowHeight);
  xii = width/2 + 120;
  xi = xii;
  yi = height/2 ;
  vi = 0.001;
  v = vi;
  t = 0;
  c=3e8;
  s=1.4e3;
  BSlider = createSlider(1, 50, 7,0.25);
  BSlider.position(50,40);
  MSlider = createSlider(1,50,1,0.25);
  MSlider.position(50,100);
  r = BSlider.value();
}

function draw() {
  background(255)
  fill('yellow')
  stroke('black')
  r = BSlider.value();
  ar = 3.14*r^2;
  m = MSlider.value();
  sun = ellipse(width/2,height/2, 150,150)
  fill('white')
  stroke('black')
  solsail = ellipse(xi,yi,r,r)
  a = (s*ar)/(c*m);
  v = v + 1000*a;
  xi = xi + v;
  fill(0)
  textSize(20)
  text("Radius: "+ r + " m",50,30)
  text("Mass: " + m + " kg",50,90)
  text("Current acceleration : ",100,height/3+60)
  text(a+" m/s^2",100,height/3+85)
  text("Current velocity : ", 100,height/3+110)
  text(v.toFixed(3)+" m/s",100,height/3+135)
  text("Time to the Moon: ", 100,height/3+160)
  tmoon = sqrt(2*384.4e6/a)/(60*60*24);
  text(tmoon.toFixed(2)+" days",100,height/3+185)
  text("Time to Jupiter: ", 100,height/3+210)
  tjupiter = sqrt(2*588e9/a)/(60*60*24);
  text(tjupiter.toFixed(2)+" days",100,height/3+235)
  if (xi > width)
  {
    xi = xii;
    v = vi;
  }

}
