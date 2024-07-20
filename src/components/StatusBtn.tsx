function StatusBtn({ label }: { label: "Reset" | "Complete" }) {
    return (
        <div>
            <button className="w-24 md:w-36 text-lg md:text-2xl text-black font-bold bg-white rounded-lg px-4 py-2 flex justify-center items-center">
                {label}
            </button>
        </div>
    );
}

export default StatusBtn;
