
export default function PrivatePage({children}){

    const auth = JSON.parse(localStorage.getItem('mywallet'));

    if(auth){
        return <>{children}</>;
    }else{
        return <></>;
    }
}