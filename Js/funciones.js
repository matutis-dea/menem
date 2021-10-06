function CalcularPuntaje(){
    let puntos=0;
    var p2 = document.getElementById('selectbox1');
    var px2 = p2.options[p2.selectedIndex].text;
    var p3 = document.getElementById('selectbox2');
    var px3 = p3.options[p3.selectedIndex].text;
    var p4 = document.getElementById('selectbox3');
    var px4 = p4.options[p4.selectedIndex].text;
    var p5 = document.getElementById('selectbox4');
    var px5 = p5.options[p5.selectedIndex].text;
    var p6 = document.getElementById('selectbox5');
    var px6 = p6.options[p6.selectedIndex].text;
    var p7 = document.getElementById('selectbox6');
    var px7 = p7.options[p7.selectedIndex].text;
    var p8 = document.getElementById('selectbox7');
    var px8 = p8.options[p8.selectedIndex].text;
    var p9 = document.getElementById('selectbox8');
    var px9 = p9.options[p9.selectedIndex].text;
    var p10 = document.getElementById('selectbox9');
    var px10 = p10.options[p10.selectedIndex].text;
    var p11 = document.getElementById('selectbox10');
    var px11 = p11.options[p11.selectedIndex].text;
    var p12 = document.getElementById('selectbox11');
    var px12 = p12.options[p12.selectedIndex].text;
    var p13 = document.getElementById('selectbox12');
    var px13 = p13.options[p12.selectedIndex].text;
    var p13 = document.getElementById('selectbox13');
    var px13 = p13.options[p13.selectedIndex].text;
    var p14 = document.getElementById('selectbox14');
    var px14 = p14.options[p14.selectedIndex].text;
    
    
    
    if (px1=='an')
    {
        puntos++;
    }
    if (px2=='any')
    {
        puntos++;
    }
    if (px3=='some')
    {
        puntos++;
    }
    if (px4=='some')
    {
        puntos++;
    }
    if (px5=='any')
    {
        puntos++;
    }
    if (px6=='any')
    {
        puntos++;
    }
    if (px7=='some')
    {
        puntos++;
    }
    if (px8=='any')
    {
        puntos++;
    }
    if (px9=='some')
    {
        puntos++;
    }
    if (px10=='any')
    {
        puntos++;
    }
    if (px11=='ssome')
    {
        puntos++;
    }
    if (px12=='some')
    {
        puntos++;
    }
    if  (px13=='some')
    {    
        puntos++;
    }
    if  (px14=='any')
    {
        puntos++;
    }
    // document.write(puntos);
    //alert ("usted tiene " + puntos + "/12 respuestas correctas" );
    if (puntos < 7){
        swal ("No has podido pasar el nivel, has conseguido ", + puntos + "/12 puntos!!! Vuelve a intentarlo", 'error');
	}
	else
	{
        swal ( "Has Conseguido pasar el nivel, has conseguido ", + puntos + "/12 puntos!!! Suerte en el siguiente nivel", 'success' )
	}
}