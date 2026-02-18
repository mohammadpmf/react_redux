function Header() {
    const isLogin = true;
    return (
        <header>
            {/* {isLogin?<button>Dashboard</button>:<button>Login</button>} */}
            {isLogin ? (
                <>
                    <button>Dashboard</button>
                    <button>Basket</button>
                </>) : (<button>Login</button>)}
        </header>
    )
}

export default Header;