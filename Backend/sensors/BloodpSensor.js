import serialport from 'serialport';
var SerialPort = serialport.SerialPort;
var portName = process.argv[7];

//remove all the sngle comment while sensore there


// export const port = new SerialPort({
//     path: "COM4",
//     baudRate: 115200
    
//   })

class BpSensor {
    constructor(n) {
   
    // this.port=null;
    }
    initateSensor() {
        console.log("initSensor");
        // this.port = new SerialPort({
        //     path: "COM4",
        //     baudRate: 115200
            
        //   });
        // const command = ["0XBE", "0XB0", "0X01", "0Xc0", "0X36"];
 

        // port.write( command , function (err) {
        //   if (err) {
        //     return console.log("Error on write: ", err.message);
        //   }
        //   console.log("message written");
        //   //console.log("ha",data);
        // });
    }
    onSensor(callback){
        this.initateSensor();
        console.log("onSensor");
        // port.on('data', async function(data) {
        //     console.log("data",Buffer.from(data,'base64').toString());
        //     console.log("data",data.toString("hex"));
        //     const readings={
        //       sis:data[4],
        //       dia:data[5],
        //       hrate:data[6],
        //       state:data[2]===5 ? "end" :data[2]===2 ? "start" : "continue"
        //     }
        //     //  const readings={
        //     //   sis:100,
        //     //   dia:20,
        //     //   hrate:30,
        //     //   state:"end"
        //     // }
            
        //     console.log("data",readings);
            
        //     callback(readings);
            
        //     const statusCode=parseInt(data[2],16);
        
        //     if(data[2] == 5)
        //    {
        //       buffer.push(data);
              
        //       port.emit("end")
          
        //     // realm.write(() => {
        //     //     sensor1 = realm.create("SensorSchema", {
        //     //         _id:1234,
        //     //         name: "bp",
        //     //         value : value,
        //     //   });
                
        //     //});
        //     }
        //     if(data[2] == 5)
        //     port.close();
             
        //       // for(i=0;i<data)
        //       // console.log("cuff pressure "+ data[5]*2 + ", sys =" + data[6] + ", dia = " + data[8] )
              
        //     })
    } 

    offSensor(){
        console.log("offSensor");
    }


  }
  





  let bpSensor = new BpSensor();
  export default bpSensor;
//   document.getElementById("demo").innerHTML =
//   "My car is " + myCar.age() + " years old.";