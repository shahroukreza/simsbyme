var BSlider
var SSlider
var r
function setup() {
  createCanvas(windowWidth, windowHeight);
  xii = width/2 + 120;
  xi = xii;
  yi = height/2 ;
  vi = 0;
  v = vi;
  t = 0;
  c=3e8;
  s=1.4e3;
  SSlider = createSlider(1,2,1,1);
  SSlider.position(50,40)
  BSlider = createSlider(1, 50, 7,0);
  BSlider.position(50,100);
  MSlider = createSlider(1,50,1,0);
  MSlider.position(50,160);
  r = BSlider.value();
  sh = SSlider.value();

}


function draw() {
  background(255)
  fill('yellow')
  stroke('black')
  sun = ellipse(width/2,height/2, 150,150)
  fill('white')
  stroke('black')
  sh = SSlider.value();
  if (sh == 1)
  {
    r = BSlider.value();
    solsail = ellipse(xi,yi,r,r);
    ar = 3.14*r^2;
    m = MSlider.value();
    a = (s*ar)/(c*m);
    v = v + 1000*a;
    xi = xi + v;
    fill(0)
    textSize(20)
    text("Cross-sectional Shape: Circle",50,30)
    text("Radius: "+ r.toFixed(2) + " m",50,90)
    text("Mass: " + m.toFixed(2) + " kg",50,150)
    text("Current acceleration : ",100,height/3+35)
    text(a+" m/s^2",100,height/3+60)
    text("Current velocity : ", 100,height/3+85)
    text(v.toFixed(3)+" m/s",100,height/3+110)
    text("Time to the Moon: ", 100,height/3+160)
    tmoon = sqrt(3.8e8/a)/(60*60*24);
    text(tmoon.toFixed(2)+" days",100,height/3+185)
    text("Time to Jupiter: ", 100,height/3+210)
    tjupiter = sqrt(6.28e11/a)/(60*60*24);
    text(tjupiter.toFixed(2)+" days",100,height/3+235)
    text("Time to Neptune: ",100, height/3 + 260)
    tneptune = sqrt(4.351e12/a)/(60*60*24);
    text(tneptune.toFixed(2) + " days",100, height/3 + 285)
    text("Time to the Edge of the Solar System: ",100, height/3 + 310)
    tedge = sqrt(9e12/a)/(60*60*24);
    text(tedge.toFixed(2) + " days",100, height/3 + 335)
    if (xi > width)
    {
      xi = xii;
      v = vi;
    }
  }
  if (sh==2)
  {
    r = BSlider.value();
    solsail = rect(xi-r,yi-r,r,r);
    ar = r^2;
    m = MSlider.value();
    a = (s*ar)/(c*m);
    v = v + 1000*a;
    xi = xi + v;
    fill(0)
    textSize(20)
    text("Cross-sectional Shape: Square",50,30)
    text("Side length: "+ r.toFixed(2) + " m",50,90)
    text("Mass: " + m.toFixed(2) + " kg",50,150)
    text("Current acceleration : ",100,height/3+35)
    text(a+" m/s^2",100,height/3+60)
    text("Current velocity : ", 100,height/3+85)
    text(v.toFixed(3)+" m/s",100,height/3+110)
    text("Time to the Moon: ", 100,height/3+160)
    tmoon = sqrt(3.8e8/a)/(60*60*24);
    text(tmoon.toFixed(2)+" days",100,height/3+185)
    text("Time to Jupiter (first gas giant): ", 100,height/3+210)
    tjupiter = sqrt(6.28e11/a)/(60*60*24);
    text(tjupiter.toFixed(2)+" days",100,height/3+235)
    text("Time to Neptune (last planet in the solar system): ",100, height/3 + 260)
    tneptune = sqrt(4.351e12/a)/(60*60*24);
    text(tneptune.toFixed(2) + " days",100, height/3 + 285)
    text("Time to the Edge of the Solar System: ",100, height/3 + 310)
    tedge = sqrt(9e12/a)/(60*60*24);
    text(tedge.toFixed(2) + " days",100, height/3 + 335)
    if (xi > width)
    {
      xi = xii;
      v = vi;
    }
  }
  }
