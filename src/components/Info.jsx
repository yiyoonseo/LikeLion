import { useState } from "react";

const Info = () => {
    // const [name, setName] = useState("");
    // const [phnum, setPhnum] = useState("");
    // const [email, setEmail] = useState("");
    // const [birth, setBirth] = useState("");
    // const [pw, setPw] = useState("");

    const [inputs, setInputs] = useState({
        name: '',
        phnum: '',
        email: '',
        birth: '',
        pw: '',
    });

    const {name, phnum, email, birth, pw} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;

        const nextInputs = {
            ...inputs,
            [name] : value,
        }
        setInputs(nextInputs);
        // console.log(inputs);
    }

    return(
        <main className="rounded-lg shadow-lg h-[640px] flex flex-col items-center margin-top dt:w-[448px] ph:w-[370px]">
            <div className="h-[32px] mx-[24px] mt-[24px] dt:w-[400px] ph:w-[322px]">
                <h1 className="text-center text-xl font-bold">Sign In</h1>
            </div>

            <div className="h-[500px] mt-[20px] flex flex-col dt:w-[400px] ph:w-[322px]">
                <div className="mb-[8px]">
                    <p className="text-[#374151] text-sm">Full Name</p>
                    <input 
                        type="text" 
                        name="name"
                        value={name}
                        onChange={onChange}
                        className="h-[40px] mt-[9px] my[8px] rounded-md border border-[#D1D5DB] dt:w-[400px] px-[12px] ph:w-[322px]" 
                    />
                </div>

                <div className="my-[8px]">
                    <p className="text-[#374151] text-sm">Phone Number</p>
                    <input 
                        type="text" 
                        name="phnum"
                        value={phnum}
                        onChange={onChange}
                        className="h-[40px] mt-[9px] my[8px] rounded-md border border-[#D1D5DB] dt:w-[400px] px-[12px] ph:w-[322px]" 
                    />
                </div>

                <div className="my-[8px]">
                    <p className="text-[#374151] text-sm">Email Address</p>
                    <input 
                        type="text" 
                        name="email"
                        value={email}
                        onChange={onChange}
                        className="h-[40px] mt-[9px] my[8px] rounded-md border border-[#D1D5DB] dt:w-[400px] px-[12px] ph:w-[322px]" 
                    />
                </div>

                <div className="my-[8px]">
                    <p className="text-[#374151] text-sm">Birthday</p>
                    <input 
                        type="date" 
                        name="birth"
                        value={birth}
                        onChange={onChange}
                        className="h-[40px] mt-[9px] my[8px] rounded-md border border-[#D1D5DB] dt:w-[400px] px-[12px] ph:w-[322px]" 
                    />
                </div>

                <div className="my-[8px]">
                    <p className="text-[#374151] text-sm">Password</p>
                    <input 
                        type="password"
                        name="pw"
                        value={pw}
                        onChange={onChange} 
                        className="h-[40px] mt-[9px] my[8px] rounded-md border border-[#D1D5DB] dt:w-[400px] px-[12px] ph:w-[322px]" 
                    />
                    {/* {(pw.length < 8 || pw.length > 16) && <span className="text-red-500 text-sm">비밀번호 길이 이상</span>} */}
                </div>

                <div className="border border-blue-500 mt-[16px] h-[40px]">
                    <button>sign in 버튼</button>
                </div>
            </div>

            <div className="h-[24px] flex flex-row justify-center gap-[10px] dt:w-[400px] ph:w-322px]">
                <p className="text-[#4B5563]">Don't have an account?</p>
                <p className="text-[#4F46E5] cursor-pointer">Register</p>
            </div>
        </main>
    )
}

export default Info;