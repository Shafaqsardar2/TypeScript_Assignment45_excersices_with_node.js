import { title } from "process"

function make_album (album_artist : string , ablum_title : string, tracks? : number) {
    let album : {
        artist : string ,
        title : string,
        tracks? : Number,

    } = {
        artist : album_artist,
        title : ablum_title,
    }

    if (tracks !== undefined) {
        album.tracks = tracks ;
    }
 return album;
}
let album1 = make_album ("Shafaq","Album 01")

console.log (album1)
 
let album2 = make_album ("Humna","Album 02")

console.log (album2)

let album3 = make_album ("Ahmed", "ALbum 03", 5)

console.log (album3)