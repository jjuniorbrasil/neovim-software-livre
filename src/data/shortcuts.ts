export type Shortcut = {
  id: string;
  label: string;
  keys: string[];
  description: string;
  mode: "Normal" | "Insert" | "Visual" | "Command";
};

export const shortcuts: Shortcut[] = [
  // --- MOVIMENTAÇÃO BÁSICA (NORMAL) ---
  { id: "h", label: "Esquerda", keys: ["H"], description: "Move o cursor para a esquerda", mode: "Normal" },
  { id: "j", label: "Baixo", keys: ["J"], description: "Move o cursor para baixo", mode: "Normal" },
  { id: "k", label: "Cima", keys: ["K"], description: "Move o cursor para cima", mode: "Normal" },
  { id: "l", label: "Direita", keys: ["L"], description: "Move o cursor para a direita", mode: "Normal" },
  { id: "w", label: "Próxima palavra", keys: ["W"], description: "Pula para o início da próxima palavra", mode: "Normal" },
  { id: "b", label: "Palavra anterior", keys: ["B"], description: "Volta para o início da palavra anterior", mode: "Normal" },
  { id: "e", label: "Fim da palavra", keys: ["E"], description: "Pula para o final da palavra atual", mode: "Normal" },
  { id: "0", label: "Início da linha", keys: ["0"], description: "Vai para o começo absoluto da linha", mode: "Normal" },
  { id: "dollar", label: "Fim da linha", keys: ["Shift", "4"], description: "Vai para o final da linha ($)", mode: "Normal" },
  { id: "caret", label: "Primeiro caractere", keys: ["Shift", "6"], description: "Vai para o primeiro caractere não vazio (^)", mode: "Normal" },
  { id: "gg", label: "Topo do arquivo", keys: ["G", "G"], description: "Pula para a primeira linha do arquivo", mode: "Normal" },
  { id: "G", label: "Fim do arquivo", keys: ["Shift", "G"], description: "Pula para a última linha do arquivo", mode: "Normal" },
  { id: "ctrl-u", label: "Subir meia página", keys: ["Ctrl", "U"], description: "Rola meia tela para cima (Up)", mode: "Normal" },
  { id: "ctrl-d", label: "Descer meia página", keys: ["Ctrl", "D"], description: "Rola meia tela para baixo (Down)", mode: "Normal" },

  // --- EDIÇÃO (NORMAL) ---
  { id: "u", label: "Desfazer", keys: ["U"], description: "Desfaz a última alteração (Undo)", mode: "Normal" },
  { id: "ctrl-r", label: "Refazer", keys: ["Ctrl", "R"], description: "Refaz a alteração desfeita (Redo)", mode: "Normal" },
  { id: "x", label: "Apagar caractere", keys: ["X"], description: "Apaga o caractere sob o cursor", mode: "Normal" },
  { id: "dd", label: "Apagar linha", keys: ["D", "D"], description: "Apaga (corta) a linha inteira", mode: "Normal" },
  { id: "dw", label: "Apagar palavra", keys: ["D", "W"], description: "Apaga até o final da palavra", mode: "Normal" },
  { id: "D", label: "Apagar até o fim", keys: ["Shift", "D"], description: "Apaga do cursor até o fim da linha", mode: "Normal" },
  { id: "yy", label: "Copiar linha", keys: ["Y", "Y"], description: "Copia (Yank) a linha inteira", mode: "Normal" },
  { id: "p", label: "Colar depois", keys: ["P"], description: "Cola o conteúdo após o cursor", mode: "Normal" },
  { id: "shift-p", label: "Colar antes", keys: ["Shift", "P"], description: "Cola o conteúdo antes do cursor", mode: "Normal" },
  { id: "r", label: "Substituir caractere", keys: ["R"], description: "Substitui o caractere sob o cursor (Replace)", mode: "Normal" },
  { id: "cc", label: "Alterar linha", keys: ["C", "C"], description: "Apaga a linha e entra no modo Insert", mode: "Normal" },
  { id: "ciw", label: "Alterar palavra interna", keys: ["C", "I", "W"], description: "Muda a palavra inteira onde o cursor está", mode: "Normal" },

  // --- MODOS (NORMAL) ---
  { id: "i", label: "Inserir (cursor)", keys: ["I"], description: "Entra no modo Insert na posição do cursor", mode: "Normal" },
  { id: "shift-i", label: "Inserir (início)", keys: ["Shift", "I"], description: "Entra no modo Insert no início da linha", mode: "Normal" },
  { id: "a", label: "Anexar (depois)", keys: ["A"], description: "Entra no modo Insert depois do cursor (Append)", mode: "Normal" },
  { id: "shift-a", label: "Anexar (fim)", keys: ["Shift", "A"], description: "Entra no modo Insert no final da linha", mode: "Normal" },
  { id: "o", label: "Nova linha abaixo", keys: ["O"], description: "Cria linha abaixo e entra no modo Insert", mode: "Normal" },
  { id: "shift-o", label: "Nova linha acima", keys: ["Shift", "O"], description: "Cria linha acima e entra no modo Insert", mode: "Normal" },
  { id: "v", label: "Modo Visual", keys: ["V"], description: "Seleção caractere por caractere", mode: "Normal" },
  { id: "shift-v", label: "Visual Linha", keys: ["Shift", "V"], description: "Seleção de linhas inteiras", mode: "Normal" },
  { id: "ctrl-v", label: "Visual Bloco", keys: ["Ctrl", "V"], description: "Seleção retangular (bloco vertical)", mode: "Normal" },

  // --- BUSCA (NORMAL) ---
  { id: "search", label: "Buscar", keys: ["/"], description: "Inicia busca no arquivo", mode: "Normal" },
  { id: "search-back", label: "Buscar para trás", keys: ["Shift", "/"], description: "Busca para trás (?)", mode: "Normal" },
  { id: "n", label: "Próximo resultado", keys: ["N"], description: "Vai para a próxima ocorrência da busca", mode: "Normal" },
  { id: "shift-n", label: "Resultado anterior", keys: ["Shift", "N"], description: "Vai para a ocorrência anterior", mode: "Normal" },
  { id: "star", label: "Buscar palavra atual", keys: ["Shift", "8"], description: "Busca a palavra sob o cursor (*)", mode: "Normal" },

  // --- JANELAS (NORMAL) ---
  { id: "split-h", label: "Split Horizontal", keys: ["Ctrl", "W", "S"], description: "Divide a janela horizontalmente", mode: "Normal" },
  { id: "split-v", label: "Split Vertical", keys: ["Ctrl", "W", "V"], description: "Divide a janela verticalmente", mode: "Normal" },
  { id: "win-left", label: "Foco Esquerda", keys: ["Ctrl", "W", "H"], description: "Move o foco para a janela da esquerda", mode: "Normal" },
  { id: "win-right", label: "Foco Direita", keys: ["Ctrl", "W", "L"], description: "Move o foco para a janela da direita", mode: "Normal" },
  { id: "win-close", label: "Fechar Janela", keys: ["Ctrl", "W", "Q"], description: "Fecha a janela atual", mode: "Normal" },
  { id: "win-equal", label: "Igualar Tamanhos", keys: ["Ctrl", "W", "="], description: "Deixa todas as janelas do mesmo tamanho", mode: "Normal" },

  // --- COMANDOS EX (NORMAL) ---
  { id: "write", label: "Salvar", keys: [":", "W", "Enter"], description: "Salva o arquivo (:w)", mode: "Normal" },
  { id: "quit", label: "Sair", keys: [":", "Q", "Enter"], description: "Sai do editor (:q)", mode: "Normal" },
  { id: "wq", label: "Salvar e Sair", keys: [":", "W", "Q", "Enter"], description: "Salva e fecha (:wq)", mode: "Normal" },
  { id: "force-quit", label: "Sair sem salvar", keys: [":", "Q", "Shift", "1", "Enter"], description: "Força a saída (:q!)", mode: "Normal" },

  // --- MODO INSERT ---
  { id: "esc-ins", label: "Sair do Insert", keys: ["Esc"], description: "Volta para o modo Normal", mode: "Insert" },
  { id: "del-word-ins", label: "Apagar palavra anterior", keys: ["Ctrl", "W"], description: "Apaga a palavra antes do cursor", mode: "Insert" },
  { id: "indent-t", label: "Identar", keys: ["Ctrl", "T"], description: "Aumenta a indentação na linha atual", mode: "Insert" },
  { id: "dedent-d", label: "Desidentar", keys: ["Ctrl", "D"], description: "Diminui a indentação na linha atual", mode: "Insert" },

  // --- MODO VISUAL ---
  { id: "visual-yank", label: "Copiar seleção", keys: ["Y"], description: "Copia o texto selecionado", mode: "Visual" },
  { id: "visual-del", label: "Apagar seleção", keys: ["D"], description: "Apaga (corta) o texto selecionado", mode: "Visual" },
  { id: "visual-change", label: "Alterar seleção", keys: ["C"], description: "Apaga a seleção e entra no modo Insert", mode: "Visual" },
  { id: "visual-indent", label: "Identar bloco", keys: ["Shift", "."], description: "Aumenta indentação do bloco (>)", mode: "Visual" },
  { id: "visual-dedent", label: "Desidentar bloco", keys: ["Shift", ","], description: "Diminui indentação do bloco (<)", mode: "Visual" },
  { id: "visual-esc", label: "Cancelar seleção", keys: ["Esc"], description: "Sai do modo Visual", mode: "Visual" },
];