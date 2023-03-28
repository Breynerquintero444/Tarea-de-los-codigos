public static void Main() {   
    string uno = "", dos = "", tres = "", cuatro = "", cinco = "";
    bool valido = true;
    for (int i = 0; i < myArray.Length; i++){ 
        if(myArray[i] < 1 || myArray[i]>5 ){ 
            valido = false;
            break;
        }
        switch(myArray[i])
        { case 1:
            uno += "*";
            break;
            case 2: dos
            += "*";
            break; 
            case3: tres +="*";
            break;
            case 4:cuatro += "*";
            break;
            case 5: cinco+= "*";
            break;
            
        }
        
    }
            if(!valido){
                Console.WriteLine("enteros fuera del rango de 1 a 5");
                
            }else{
                Console.WriteLine("1: "+uno);
                Console.WriteLine("2: "+dos);
                Console.WriteLine("3: "+tres);
                Console.WriteLine("4: "+cuatro);
                Console.WriteLine("5: "+cinco);
                
            }
    
}
