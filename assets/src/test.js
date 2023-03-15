function foo( array )
  {
    let sume = 0;
    let counte = 0;
    let sumo = 0;
    let counto = 0;
    for ( var n of array )
      {
        var even = n % 2;
        ( even ) == 0 ? sume += n : sumo += n;
        ( even ) == 0 ? counte++ : counto++;
      }
    var re = counte == 0 ? 0 : sume/counte;
    var ro = counto == 0 ? 0 : sumo/counto;
    return [re, ro];
  }


const array = new Array();
let stop = false

do
  {
    let v = prompt( "insert: " );
    if( v != "STOP!" )
      {
        v = Number(v);
        array.push( v );
      }
    else
      {
        stop = true;
      }
  }
while( !stop );
