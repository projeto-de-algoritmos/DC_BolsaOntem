import pandas as pd
import warnings
warnings.filterwarnings('ignore')

def median_of_medians(lst, target_value):
    if len(lst) <= 5:
        return sorted(lst)[len(lst) // 2]

    groups = [lst[i:i + 5] for i in range(0, len(lst), 5)]
    medians = [median_of_medians(group, target_value) for group in groups]

    pivot = median_of_medians(medians, target_value)

    lower = [x for x in lst if x < pivot]
    upper = [x for x in lst if x > pivot]
    equal = [x for x in lst if x == pivot]

    if len(lower) > 0 and max(lower) >= target_value:
        return median_of_medians(lower, target_value)
    elif len(upper) > 0 and min(upper) <= target_value:
        return median_of_medians(upper, target_value)
    else:
        return min(equal, key=lambda x: abs(x - target_value))

## Buscando codigos das acoes que existe na Bovespa e do dia de hoje
# pip3 install lxml
def informacao(valor_desejado):
    url = ('https://www.dadosdemercado.com.br/bolsa/acoes')
    data = pd.read_html(url)
    df = data[0]
    df.drop(['Volume', 'Variação', 'Unnamed: 5'], axis=1, inplace=True)

    df['Última (R$)'] = df['Última (R$)'].str.replace('.', '').str.replace(',', '.')
    df['Última (R$)'] = df['Última (R$)'].astype(float)
    df['Última (R$)'] = df['Última (R$)']/100
    closest_price = median_of_medians(df['Última (R$)'].tolist(), valor_desejado)
   
    lista = sorted(df['Última (R$)'])
    posicao = lista.index(closest_price)
    valores_proximos = lista[max(0, posicao-2):posicao+3]

    while len(valores_proximos) < 4:
        if posicao - 2 < 0:  
            valores_proximos.append(lista[posicao+len(valores_proximos)+1])
        elif posicao + len(valores_proximos) >= len(lista): 
            valores_proximos.insert(0, lista[posicao-len(valores_proximos)-1])
        else:
            valores_proximos.append(lista[posicao+len(valores_proximos)+1])
            valores_proximos.insert(0, lista[posicao-len(valores_proximos)-1])

    row0 = df[df['Última (R$)'] == valores_proximos[0]]
    row1 = df[df['Última (R$)'] == valores_proximos[1]]
    row2 = df[df['Última (R$)'] == valores_proximos[2]]
    row3 = df[df['Última (R$)'] == valores_proximos[3]]
    row4 = df[df['Última (R$)'] == valores_proximos[4]]

    cod0 = row0["Código"].values[0]
    nom0 = row0["Nome"].values[0]
    valo0 = row0["Última (R$)"].values[0]

    cod1 = row1["Código"].values[0]
    nom1 = row1["Nome"].values[0]
    valo1 = row1["Última (R$)"].values[0]

    cod2 = row2["Código"].values[0]
    nom2 = row2["Nome"].values[0]
    valo2 = row2["Última (R$)"].values[0]

    cod3 = row3["Código"].values[0]
    nom3 = row3["Nome"].values[0]
    valo3 = row3["Última (R$)"].values[0]

    cod4 = row4["Código"].values[0]
    nom4 = row4["Nome"].values[0]
    valo4 = row4["Última (R$)"].values[0]

    return {
    "Codigo0":cod0, "Nome0":nom0, "Valor0":valo0,
    "Codigo1":cod1, "Nome1":nom1, "Valor1":valo1,
    "Codigo2":cod2, "Nome2":nom2, "Valor2":valo2,
    "Codigo3":cod3, "Nome3":nom3, "Valor3":valo3,
    "Codigo4":cod4, "Nome4":nom4, "Valor4":valo4,
    }

   # row = df[df['Última (R$)'] == closest_price]
   # codigo = row['Código'].values[0]
   # nome = row['Nome'].values[0]
   # valor = row['Última (R$)'].values[0]
   # return {"Codigo": codigo, "Nome": nome, "Valor": valor}
  