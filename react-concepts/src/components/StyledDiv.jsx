function StyledDiv({ children, title }) {
    const styles = { border: "2px solid black", padding: "10px", margin: "20px" }
    return (
        <div style={styles}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}

export default StyledDiv