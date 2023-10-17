export default function ApplicationLogo(props) {
    console.log(props);
    return (

        <>
            {<img src={ props['props']['general_setting']['logo']} />}
            {/* <img src="/storage/app/public/Default_Logo_withName.png"/> */}
        </>
    );
}
