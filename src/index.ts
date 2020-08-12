import { AssistantPackage, RuleDefinition } from '@sketch-hq/sketch-assistant-types'

const duplicateSymbols: RuleDefinition = {
  rule: async (context) => {
    interface Duplicate {
      name: string;
      number: number;
    }
    var allSymbols = [];
    var duplicates: Array<Duplicate> = [];
    var totalDuplicates = 1;
    for (const symbol of context.utils.objects.symbolMaster) {
      if (allSymbols.indexOf(symbol.name) >= 0) {
        totalDuplicates++;
        var existingElement = duplicates.find(element => element.name == symbol.name);
        if (existingElement != null)
          existingElement.number++;
        else
          duplicates.push({ "name": symbol.name, "number": 2 })
      }
      else
        allSymbols.push(symbol.name);
    }

    if (duplicates.length > 0)
      context.utils.report("There " + (totalDuplicates > 1 ? "are " : "is ") + totalDuplicates + " duplicate symbols.");
  },
  name: 'oodesign-duplicates-assistant/duplicate-symbols',
  title: 'Duplicate symbols',
  description: 'Reports duplicate symbols in your design file.',
}

const assistant: AssistantPackage = async () => {
  return {
    name: 'oodesign-duplicates-assistant',
    rules: [duplicateSymbols],
    config: {
      rules: {
        'oodesign-duplicates-assistant/duplicate-symbols': { active: true },
      },
    },
  }
}

export default assistant
