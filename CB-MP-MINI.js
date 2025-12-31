// === >>= >>= ==> [{ "Created By": "RENDI MARZIKRI" }] <== =<< =<< === \\
/* === === === ==> CB-MP-MINI <== === === ===
 * CB = "Chat-Bot";
 * MP = "Matching-Pattern";
 * MINI = MINI
*/

(function(){window.reply=function(id){
    if(!window.siapa_kamu){window.siapa_kamu="Aku adalah AI yang dibuat oleh Rendi Marzikri!";}
    let res="ya";
    let user=id.toLowerCase();
    if(user.includes("hai")){res="hai";}
    else if(user.includes("siapa kamu")){res=siapa_kamu;}
    else if(user.includes("nama saya")){const match=user.match(/nama saya (.+)/);
        if(match){const x=match[1];res=x;
        }else{res="halo";}}
    else if(user.includes("halo")){res="halo";}
    else if(user.includes("apa kabar")){res="baik";}
    else if(user.includes("aku suka")){const match=user.match(/aku suka (.+)/);
        if(match){const x=match[1];res=x;
        }else{res="suka";}}
    else if(user.includes("yang bisa kamu lakukan")){res="merespon";}
    return res;}})();