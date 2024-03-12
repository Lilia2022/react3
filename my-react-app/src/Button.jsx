
function Button(){

    const styles = { 
        backgroundColor: "hsl(0, 35%, 40%)",
        color:" white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    return(
        <button style={styles}>Click me</button>
    );
}

export default Button