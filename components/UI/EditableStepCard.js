import { useState } from "react"

function EditableStepCard({ step, index, handleChange, selectedRowId, setSelectedRowId, onSelect  }) {
    const [editingField, setEditingField] = useState(null)

    const isSelected = selectedRowId === step.id

    return (
        <div
            onClick={(e) => {
                e.stopPropagation()
                onSelect(step.id)
            }}
            className={`border border-gray-300 rounded-lg p-4 transition-all cursor-pointer
        ${isSelected ? "border-purple-500 bg-purple-50 shadow-md" : "bg-white"}
      `}
        >
            <div className="grid md:grid-cols-4 gap-4 text-sm">

                {["action", "object", "input", "description"].map((field) => (
                    <div
                        key={field}
                        className="min-w-0"
                        onClick={(e) => {
                            // e.stopPropagation()
                            if (isSelected) setEditingField(field)
                        }}
                    >
                        {editingField === field ? (
                            <input
                                autoFocus
                                value={step[field]}
                                onChange={(e) =>
                                    handleChange(index, field, e.target.value)
                                }
                                onBlur={() => setEditingField(null)}
                                className="w-full border rounded text-gray-700 px-2 py-1"
                            />
                        ) : (
                            <p className="truncate text-gray-700 capitalize">
                                {step[field] || "-"}
                            </p>
                        )}
                    </div>
                ))}

            </div>
        </div>
    )
}

export default EditableStepCard