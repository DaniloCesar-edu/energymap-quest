
import React, { useState } from 'react';
import { Upload, Check, FileUp, FileText, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const DataSubmissionForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    territory: '',
    dataType: '',
    sourceType: '',
    dataDescription: '',
    collectionDate: '',
    contactEmail: ''
  });
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula envio de dados
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Dados enviados com sucesso!",
        description: "Agradecemos sua contribuição para o mapeamento energético.",
        duration: 5000,
      });
      
      // Reset do formulário
      setFormData({
        territory: '',
        dataType: '',
        sourceType: '',
        dataDescription: '',
        collectionDate: '',
        contactEmail: ''
      });
      setSelectedFiles([]);
    }, 1500);
  };
  
  return (
    <div className="animate-fade-in p-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Enviar Dados</h2>
        <p className="text-muted-foreground">
          Contribua com informações sobre seu território para enriquecer nosso mapeamento energético.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações Básicas</CardTitle>
                <CardDescription>Detalhes sobre o território e o tipo de dados</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="territory">Território</Label>
                    <Select 
                      value={formData.territory} 
                      onValueChange={(value) => handleSelectChange('territory', value)}
                    >
                      <SelectTrigger id="territory">
                        <SelectValue placeholder="Selecione o território" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recife">Recife (PE)</SelectItem>
                        <SelectItem value="salvador">Salvador (BA)</SelectItem>
                        <SelectItem value="fortaleza">Fortaleza (CE)</SelectItem>
                        <SelectItem value="natal">Natal (RN)</SelectItem>
                        <SelectItem value="joao-pessoa">João Pessoa (PB)</SelectItem>
                        <SelectItem value="maceio">Maceió (AL)</SelectItem>
                        <SelectItem value="teresina">Teresina (PI)</SelectItem>
                        <SelectItem value="sao-luis">São Luís (MA)</SelectItem>
                        <SelectItem value="aracaju">Aracaju (SE)</SelectItem>
                        <SelectItem value="juazeiro">Juazeiro (BA)</SelectItem>
                        <SelectItem value="petrolina">Petrolina (PE)</SelectItem>
                        <SelectItem value="outro">Outro (especificar)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dataType">Tipo de Dados</Label>
                    <Select 
                      value={formData.dataType} 
                      onValueChange={(value) => handleSelectChange('dataType', value)}
                    >
                      <SelectTrigger id="dataType">
                        <SelectValue placeholder="Selecione o tipo de dados" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="energy-need">Necessidade Energética</SelectItem>
                        <SelectItem value="solar-potential">Potencial Solar</SelectItem>
                        <SelectItem value="wind-potential">Potencial Eólico</SelectItem>
                        <SelectItem value="hydro-potential">Potencial Hídrico</SelectItem>
                        <SelectItem value="socioeconomic">Dados Socioeconômicos</SelectItem>
                        <SelectItem value="other">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sourceType">Fonte dos Dados</Label>
                  <Select 
                    value={formData.sourceType} 
                    onValueChange={(value) => handleSelectChange('sourceType', value)}
                  >
                    <SelectTrigger id="sourceType">
                      <SelectValue placeholder="Selecione a fonte" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="official">Fonte Oficial (governamental)</SelectItem>
                      <SelectItem value="research">Instituição de Pesquisa</SelectItem>
                      <SelectItem value="ngo">Organização Não-Governamental</SelectItem>
                      <SelectItem value="community">Pesquisa Comunitária</SelectItem>
                      <SelectItem value="self-collected">Coleta Própria</SelectItem>
                      <SelectItem value="other">Outra Fonte</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="dataDescription">Descrição dos Dados</Label>
                  <Textarea 
                    id="dataDescription"
                    name="dataDescription"
                    value={formData.dataDescription}
                    onChange={handleInputChange}
                    placeholder="Descreva detalhadamente os dados que está enviando e como foram coletados"
                    className="min-h-[120px] resize-y"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Arquivos e Contato</CardTitle>
                <CardDescription>Envie arquivos e forneça informações de contato</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="collectionDate">Data da Coleta</Label>
                    <Input 
                      id="collectionDate"
                      name="collectionDate"
                      type="date"
                      value={formData.collectionDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Email de Contato</Label>
                    <Input 
                      id="contactEmail"
                      name="contactEmail"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <Separator className="my-2" />
                
                <div className="space-y-2">
                  <Label htmlFor="fileUpload">Anexar Arquivos</Label>
                  <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center cursor-pointer hover:bg-muted/20 transition-colors">
                    <Input 
                      id="fileUpload"
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="fileUpload" className="cursor-pointer">
                      <FileUp className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm font-medium mb-1">Arraste arquivos ou clique para selecionar</p>
                      <p className="text-xs text-muted-foreground">
                        Formatos suportados: PDF, XLS, CSV, DOCX, JPG, PNG (máx 10MB por arquivo)
                      </p>
                    </label>
                  </div>
                  
                  {selectedFiles.length > 0 && (
                    <div className="mt-3 space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">Arquivos selecionados:</p>
                      {selectedFiles.map((file, index) => (
                        <div key={index} className="flex items-center text-xs bg-muted/30 rounded p-2">
                          <FileText className="h-3.5 w-3.5 mr-2 text-primary" />
                          <span className="truncate">{file.name}</span>
                          <span className="ml-auto text-muted-foreground">
                            {(file.size / 1024).toFixed(0)} KB
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <p>Todos os dados enviados serão revisados antes de serem incorporados ao sistema.</p>
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Upload className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Upload className="mr-2 h-4 w-4" />
                        Enviar Dados
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
        
        <div className="col-span-1">
          <div className="space-y-6 sticky top-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dicas para Submissão</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <p className="text-sm">Forneça dados o mais detalhados possível, incluindo a metodologia de coleta.</p>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <p className="text-sm">Inclua referências e fontes para que possamos verificar a procedência dos dados.</p>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <p className="text-sm">Se possível, forneça séries temporais ao invés de medições pontuais.</p>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <p className="text-sm">Anexe fotos e documentos que comprovem a coleta de dados (quando aplicável).</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">O que acontece depois?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">
                  Após a submissão, sua contribuição passará por um processo de revisão e validação:
                </p>
                
                <ol className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                    <span>Avaliação inicial dos dados submetidos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                    <span>Validação técnica por especialistas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                    <span>Incorporação ao sistema de mapeamento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                    <span>Notificação sobre o uso dos seus dados</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSubmissionForm;
