
import { colors } from "./Colors"
import { B1, B12, B14, B15, B16, B17, B18, B9, G1, G12, G14, G15, G16, G17, G18, G9, R1, R12, R14, R15, R16, R17, R18, R9, Y1, Y12, Y14, Y15, Y16, Y17, Y18, Y9 } from "./Constants";
import { Entypo } from '@expo/vector-icons';
export const getCellBackgroundColor = (position) =>{
    const { red,blue,yellow,green} = colors;
    switch(position){
        case R1:
        case R9:
        case R14:
        case R15:
        case R16:
        case R17:
        case R18:
            return "#c1121f";
        case Y1:
        case Y9:
        case Y14:
        case Y15:
        case Y16:
        case Y17:
        case Y18:
            return '#ffd500';
        case G1:
        case G9:
        case G14:
        case G15:
        case G16:
        case G17:
        case G18:
            return green;
        case B1:
        case B9:
        case B14:
        case B15:
        case B16:
        case B17:
        case B18:
            return blue;

         
        default:
            return colors.white;
    }



    // switch(position){
    //     case B12 :
    //          return  <Entypo name="arrow-long-right" size={20} color="red" style={{ marginTop: -16 }} />
    //     case R12 :
    //         return <Entypo name="arrow-long-down" size={20} color="#ffe01b" style={{ marginTop: -16 }} />  
            
    //     case Y12 :
    //        return <Entypo name="arrow-long-left" size={20} color="green" style={{ marginTop: -16 }} />  
            
    //     case G12 :
    //          return  <Entypo name="arrow-long-up" size={20} color="#29b6f6" style={{ marginTop: -16 }} />
    //      default:
    //         return null;    
    // }




}
