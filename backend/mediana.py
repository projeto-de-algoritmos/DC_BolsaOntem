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
    row = df[df['Última (R$)'] == closest_price]
    codigo = row['Código'].values[0]
    nome = row['Nome'].values[0]
    valor = row['Última (R$)'].values[0]
    return {"Código": codigo, "Nome": nome, "Valor": valor}