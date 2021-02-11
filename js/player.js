class player 
{
    constructor ()
    {
        this.name = null;
        this.index = null;
        this.distance = 0;
    } 

    getCount ()
    {
        var playerRef = database.ref ('PlayerCount');
        playerRef.on ("value", function (data)
        {
            PlayerCount = data.val ();
        }) 
    } 

    updateCount (count)
    {
        database.ref('/').update({PlayerCount : count})
    } 

    update ()
    {
        var playerIndex = "players/Player" + this.index;  
        database.ref(playerIndex).set({'Name':this.name, 'Distance' : this.distance})   //Name Value - .set({Name of the node : value})
    } 

    static getPlayerInfo ()
    {
        var PlayersRef = database.ref("players");
        PlayersRef.on ("value", (DATA)=> {
        allPlayers = DATA.val ();
        })
        
    }
}