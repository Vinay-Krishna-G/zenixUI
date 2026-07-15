import React, { useState } from "react"
import type { ExperienceEditorSchema, FieldDefinition } from "@/types/experience"
import { ChevronDown, ChevronRight, Plus, Trash2 } from "lucide-react"

interface ContentEditorProps {
  content: any;
  schema: ExperienceEditorSchema;
  onChange: (sectionKey: string, sectionData: any) => void;
}

export function ContentEditor({ content, schema, onChange }: ContentEditorProps) {
  const [activeSection, setActiveSection] = useState(schema.order[0] || "")

  if (schema.component) {
    const CustomEditor = schema.component
    return <CustomEditor content={content} onChange={onChange} schema={schema} />
  }

  const handleSectionChange = (data: any) => {
    onChange(activeSection, data)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-3 border-b border-[#222]">
        <select 
          value={activeSection}
          onChange={(e) => setActiveSection(e.target.value)}
          className="w-full bg-[#111] border border-[#333] rounded px-3 py-2 text-sm font-medium text-white focus:outline-none focus:border-brand-500"
        >
          {schema.order.map((key) => (
            <option key={key} value={key}>
              {schema.labels[key] || key}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-24">
        {activeSection && (
          <SectionEditor 
            data={content[activeSection] || {}} 
            fields={schema.fields[activeSection] || {}}
            onChange={handleSectionChange}
          />
        )}
      </div>
    </div>
  )
}

interface SectionEditorProps {
  data: any;
  fields: Record<string, FieldDefinition>;
  onChange: (data: any) => void;
}

function SectionEditor({ data, fields, onChange }: SectionEditorProps) {
  return (
    <div className="space-y-6">
      {Object.entries(fields).map(([key, field]) => (
        <FieldEditor 
          key={key}
          fieldKey={key}
          field={field}
          value={data[key]}
          onChange={(val) => onChange({ ...data, [key]: val })}
        />
      ))}
    </div>
  )
}

interface FieldEditorProps {
  fieldKey: string;
  field: FieldDefinition;
  value: any;
  onChange: (value: any) => void;
}

function FieldEditor({ fieldKey, field, value, onChange }: FieldEditorProps) {
  const label = field.label || fieldKey;

  if (field.kind === "string" || field.kind === "title" || field.kind === "url" || field.kind === "image" || field.kind === "color") {
    return (
      <div className="space-y-2">
        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">{label}</label>
        <input 
          type="text" 
          value={value || ""} 
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-[#222] border border-[#333] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors"
        />
      </div>
    )
  }

  if (field.kind === "textarea" || field.kind === "richText") {
    return (
      <div className="space-y-2">
        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">{label}</label>
        <textarea 
          value={value || ""} 
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-[#222] border border-[#333] rounded px-3 py-2 text-sm text-white min-h-[80px] focus:outline-none focus:border-brand-500 transition-colors"
        />
      </div>
    )
  }

  if (field.kind === "object" || field.kind === "button") {
    return (
      <div className="space-y-3 p-3 bg-[#111] border border-[#222] rounded-md">
        <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">{label}</label>
        <div className="space-y-4 pl-2 border-l border-[#333]">
          {field.fields && Object.entries(field.fields).map(([childKey, childField]) => (
            <FieldEditor 
              key={childKey}
              fieldKey={childKey}
              field={childField}
              value={value?.[childKey]}
              onChange={(childVal) => onChange({ ...value, [childKey]: childVal })}
            />
          ))}
        </div>
      </div>
    )
  }

  if (field.kind === "list") {
    const items = Array.isArray(value) ? value : [];
    
    // If it's a list without a schema, it's just an array of strings
    const isPrimitiveList = !field.schema || Object.keys(field.schema).length === 0;

    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">{label}</label>
          <button 
            onClick={() => onChange([...items, isPrimitiveList ? "" : {}])}
            className="text-xs text-brand-500 hover:text-brand-400 flex items-center gap-1"
          >
            <Plus className="w-3 h-3" /> Add
          </button>
        </div>
        
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="relative group">
              {isPrimitiveList ? (
                <div className="flex gap-2">
                  <textarea
                    value={item}
                    onChange={(e) => {
                      const newItems = [...items];
                      newItems[index] = e.target.value;
                      onChange(newItems);
                    }}
                    className="w-full bg-[#222] border border-[#333] rounded px-3 py-2 text-sm text-white min-h-[60px]"
                  />
                  <button 
                    onClick={() => {
                      const newItems = [...items];
                      newItems.splice(index, 1);
                      onChange(newItems);
                    }}
                    className="mt-2 text-zinc-500 hover:text-red-400 h-fit"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <ListObjectItem 
                  index={index}
                  item={item}
                  schema={field.schema!}
                  onChange={(newItem) => {
                    const newItems = [...items];
                    newItems[index] = newItem;
                    onChange(newItems);
                  }}
                  onRemove={() => {
                    const newItems = [...items];
                    newItems.splice(index, 1);
                    onChange(newItems);
                  }}
                />
              )}
            </div>
          ))}
          {items.length === 0 && (
            <div className="text-xs text-zinc-500 italic p-4 text-center border border-dashed border-[#333] rounded">
              No items yet.
            </div>
          )}
        </div>
      </div>
    )
  }

  return <div className="text-xs text-red-500">Unsupported field kind: {field.kind}</div>
}

function ListObjectItem({ index, item, schema, onChange, onRemove }: { index: number, item: any, schema: Record<string, FieldDefinition>, onChange: (v: any) => void, onRemove: () => void }) {
  const [expanded, setExpanded] = useState(false);
  
  // Use the first string field as the summary title
  const titleKey = Object.keys(schema).find(k => schema[k].kind === "string" || schema[k].kind === "title") || Object.keys(schema)[0];
  const summary = item[titleKey] || `Item ${index + 1}`;

  return (
    <div className="bg-[#111] border border-[#222] rounded-md overflow-hidden transition-colors hover:border-[#333]">
      <div 
        className="flex items-center justify-between p-3 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-2 overflow-hidden">
          {expanded ? <ChevronDown className="w-4 h-4 text-zinc-500" /> : <ChevronRight className="w-4 h-4 text-zinc-500" />}
          <span className="text-sm text-zinc-300 truncate">{summary}</span>
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          className="text-zinc-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      
      {expanded && (
        <div className="p-4 border-t border-[#222] bg-[#0a0a0a] space-y-4">
          {Object.entries(schema).map(([key, field]) => (
            <FieldEditor 
              key={key}
              fieldKey={key}
              field={field}
              value={item[key]}
              onChange={(val) => onChange({ ...item, [key]: val })}
            />
          ))}
        </div>
      )}
    </div>
  )
}
