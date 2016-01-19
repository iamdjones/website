class Startup {
    public static main(): number {
        console.log("Hello World");
        return 0;
    }
    public static other(): number {
        console.log("go away");
        return 0;
    }
    private static helo(): number {
        console.log("what's up brother");
        return 0;
    }
    private _derp: number;
    private get Derp(): number{
        return this._derp;
    }
    private set Derp(v: number){
        this._derp = v;
    }
    
}
