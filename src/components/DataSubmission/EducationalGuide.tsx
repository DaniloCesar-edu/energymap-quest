
import React from 'react';
import { Info, FileText, AlertCircle, CheckCircle, FileImage, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const EducationalGuide: React.FC = () => {
  return (
    <div className="animate-fade-in p-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Guia de Contribuição</h2>
        <p className="text-muted-foreground">
          Aprenda como contribuir com dados para enriquecer as informações sobre o seu território.
        </p>
      </div>
      
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>Por que contribuir com dados?</CardTitle>
                <CardDescription>A importância dos dados locais para o mapeamento energético</CardDescription>
              </div>
              <Info className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Dados locais precisos são fundamentais para um planejamento energético eficiente:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                <span>Ajudam a identificar áreas com maior necessidade de investimentos energéticos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                <span>Permitem mapear com precisão o potencial para geração de energia renovável</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                <span>Auxiliam gestores públicos na tomada de decisões sobre políticas energéticas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                <span>Facilitam o desenvolvimento de projetos energéticos comunitários</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>Quais dados são necessários?</CardTitle>
                <CardDescription>Tipos de informações que enriquecem nosso mapeamento</CardDescription>
              </div>
              <Database className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="glass-panel p-4">
                <h4 className="text-sm font-semibold mb-2 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2 text-amber-500" />
                  Necessidade Energética
                </h4>
                <ul className="space-y-1 text-xs">
                  <li>• % de domicílios com acesso à eletricidade</li>
                  <li>• Frequência de interrupções no fornecimento</li>
                  <li>• Consumo médio de eletricidade por residência</li>
                  <li>• Número de comunidades isoladas sem rede elétrica</li>
                </ul>
              </div>
              
              <div className="glass-panel p-4">
                <h4 className="text-sm font-semibold mb-2 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2 text-amber-400" />
                  Potencial Solar
                </h4>
                <ul className="space-y-1 text-xs">
                  <li>• Medições locais de radiação solar (kWh/m²/dia)</li>
                  <li>• Horas médias diárias de insolação</li>
                  <li>• Áreas disponíveis para instalação de painéis</li>
                  <li>• Dados de nebulosidade média ao longo do ano</li>
                </ul>
              </div>
              
              <div className="glass-panel p-4">
                <h4 className="text-sm font-semibold mb-2 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2 text-blue-400" />
                  Potencial Eólico
                </h4>
                <ul className="space-y-1 text-xs">
                  <li>• Velocidade média dos ventos (m/s)</li>
                  <li>• Direção predominante dos ventos</li>
                  <li>• Constância e sazonalidade dos ventos</li>
                  <li>• Características topográficas locais</li>
                </ul>
              </div>
              
              <div className="glass-panel p-4">
                <h4 className="text-sm font-semibold mb-2 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2 text-blue-600" />
                  Potencial Hídrico
                </h4>
                <ul className="space-y-1 text-xs">
                  <li>• Vazão de rios e córregos (m³/s)</li>
                  <li>• Períodos de seca e cheia</li>
                  <li>• Quedas d'água e desníveis aproveitáveis</li>
                  <li>• Qualidade e disponibilidade da água</li>
                </ul>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Além desses, dados socioeconômicos (população, renda média, atividades econômicas) são importantes para contextualizar as necessidades energéticas.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>Como coletar dados confiáveis?</CardTitle>
                <CardDescription>Métodos para obtenção de informações de qualidade</CardDescription>
              </div>
              <FileText className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold mb-2">1. Fontes oficiais</h4>
                <p className="text-xs text-muted-foreground mb-2">
                  Priorize dados de instituições governamentais e de pesquisa:
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• IBGE (Instituto Brasileiro de Geografia e Estatística)</li>
                  <li>• INMET (Instituto Nacional de Meteorologia)</li>
                  <li>• ANEEL (Agência Nacional de Energia Elétrica)</li>
                  <li>• ANA (Agência Nacional de Águas)</li>
                  <li>• Secretarias estaduais e municipais de energia e meio ambiente</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-sm font-semibold mb-2">2. Instrumentos de medição</h4>
                <p className="text-xs text-muted-foreground mb-2">
                  Para coleta direta de dados, utilize equipamentos adequados:
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• Piranômetro ou solarímetro (para radiação solar)</li>
                  <li>• Anemômetro (para velocidade e direção dos ventos)</li>
                  <li>• Fluviômetro (para medir vazão de rios)</li>
                  <li>• Sistemas de monitoramento meteorológico</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-sm font-semibold mb-2">3. Pesquisas locais</h4>
                <p className="text-xs text-muted-foreground mb-2">
                  Informações da comunidade podem ser valiosas:
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• Questionários sobre acesso e qualidade da energia elétrica</li>
                  <li>• Entrevistas com moradores sobre interrupções de energia</li>
                  <li>• Consultas a especialistas locais (engenheiros, técnicos)</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-sm font-semibold mb-2">4. Registros fotográficos e documentais</h4>
                <div className="flex items-center space-x-2 mb-2">
                  <FileImage className="h-4 w-4 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">
                    Complementando os dados numéricos com registros visuais e documentais.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-center mt-8">
          <Button size="lg" className="animated-button">
            Enviar Dados
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EducationalGuide;
