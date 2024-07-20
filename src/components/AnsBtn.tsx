function AnsBtn({ label }: { label: "Correct" | "Incorrect" }) {
    const bgColor = label === "Correct" ? "green" : "red";

    return (
        <div>
            <button
                className={`text-5xl text-center text-white bg-${bgColor}-500 px-5 py-3 rounded-lg font-semibold hover:bg-${bgColor}-700`}>
                {label}
            </button>
        </div>
    );
}

export default AnsBtn;
