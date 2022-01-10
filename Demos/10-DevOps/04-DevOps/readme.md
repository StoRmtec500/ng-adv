# Angular DevOps

- Deploy Angular App to Firebase using Azure DevOps
- Deploy to Azure Container Instances (ACI) using Azure DevOps

## Api Deployment

- To deploy Food Api to an Azure App Service execute `./food-app/deploy-api.azcli`:

```bash
rnd=$RANDOM
env=staging
grp=ng-adv
loc=westeurope
appPlan=ng-adv-$env
ai=foodai$rnd
app=food-api-$env-$rnd

az group create -n $grp -l $loc

# Create application insights
az extension add --name application-insights
az monitor app-insights component create --app $ai --location $loc --kind web -g $grp --application-type web --retention-time 30
aikey=$(az monitor app-insights component show --app $ai -g $grp --query instrumentationKey -o tsv)
echo "*** Use this key for applicationInsights in your .NET and Angular config: " $aikey

# Build and deploy food api
cd ./food-api
az webapp up -n $app -g $grp -p $appPlan -l $loc -r "DOTNET|6.0"
az webapp config appsettings set -g $grp -n $app --settings Azure:ApplicationInsights=$aikey
url=$(az webapp list -g $grp --query [0].defaultHostName)
echo "*** Use this apiUrl for your angular config: " $url
cd ..
```

>Note: To focus on Angular we deploy Api To App Service and not to Containers. Config management is very easy there. Deployment takes around 5 min.