
function Test ()
{  
   async function HandleMessageSending()
   {

    await sendMessageVivaAxios();
   }
    return(<div>

        <button onClick={HandleMessageSending}> Send Request to Server</button>
    </div>);
}